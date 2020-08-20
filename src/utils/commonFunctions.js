import {
  NZ_ISO_SUFFIX,
  ISO_DATE_REGEX,
  LOCALE_SHORTHANDS,
  NAN_STATISTICS,
  PER_MILLION_OPTIONS,
  STATISTIC_OPTIONS,
  TESTED_LOOKBACK_DAYS,
} from '../constants';

import {
  differenceInDays,
  format,
  formatDistance,
  formatISO,
  subDays,
} from 'date-fns';
import {utcToZonedTime} from 'date-fns-tz';
import i18n from 'i18next';

let locale = null;
const numberFormatter = new Intl.NumberFormat('en-nz', {
  maximumFractionDigits: 1,
});

const getLocale = () => {
  import('date-fns/locale/').then((localePackage) => {
    locale =
      localePackage[
        LOCALE_SHORTHANDS[i18n.language || window.localStorage.i18nextLng]
      ];
  });
};

export const isDevelopmentOrTest = () => {
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')
    return true;
  return false;
};

export const getNZDate = () => {
  return utcToZonedTime(new Date(), 'Pacific/Auckland');
};

export const getNZDateISO = () => {
  return formatISO(getNZDate(), {representation: 'date'});
};

export const getNZYesterdayISO = () => {
  console.log(formatISO(subDays(getNZDate(), 1), {representation: 'date'}))
  return formatISO(subDays(getNZDate(), 1), {representation: 'date'});
};

export const formatLastUpdated = (unformattedDate) => {
  getLocale();
  return formatDistance(new Date(unformattedDate), new Date(), {
    locale: locale,
  });
};

export const parseNZDate = (isoDate) => {
  if (!isoDate) return getNZDate();
  if (isoDate.match(ISO_DATE_REGEX)) isoDate += NZ_ISO_SUFFIX;
  return utcToZonedTime(new Date(isoDate), 'Pacific/Auckland');
};

export const formatDate = (unformattedDate, formatString) => {
  if (!unformattedDate) return '';
  if (
    typeof unformattedDate === 'string' &&
    unformattedDate.match(ISO_DATE_REGEX)
  )
    unformattedDate += NZ_ISO_SUFFIX;
  const date = utcToZonedTime(new Date(unformattedDate), 'Pacific/Auckland');
  return format(date, formatString, {
    locale: locale,
  });
};

export const abbreviateNumber = (number) => {
  if (Math.abs(number) < 1e3) return numberFormatter.format(number);
  else if (Math.abs(number) >= 1e3 && Math.abs(number) < 1e6)
    return numberFormatter.format(number / 1e3) + 'K';
  else if (Math.abs(number) >= 1e6)
    return numberFormatter.format(number / 1e6) + 'M';
  // else if (Math.abs(number) >= 1e7 && Math.abs(number) < 1e10)
  //   return numberFormatter.format(number / 1e7) + 'Cr';
  // else if (Math.abs(number) >= 1e10 && Math.abs(number) < 1e14)
  //   return numberFormatter.format(number / 1e10) + 'K Cr';
  // else if (Math.abs(number) >= 1e14)
  //   return numberFormatter.format(number / 1e14) + 'L Cr';
};

export const formatNumber = (value, option, statistic) => {
  if (statistic && value === 0 && NAN_STATISTICS.includes(statistic))
    value = NaN;

  if (isNaN(value)) return '-';
  else if (option === 'short') {
    return abbreviateNumber(value);
  } else if (option === 'int') {
    value = Math.floor(value);
  }
  return numberFormatter.format(value) + (option === '%' ? '%' : '');
};

export const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const getStatistic = (data, type, statistic, perMillion = false) => {
  const {key, normalizeByKey: normalizeBy, multiplyFactor} = {
    ...STATISTIC_OPTIONS[statistic],
    ...(perMillion &&
      !STATISTIC_OPTIONS[statistic]?.normalizeByKey &&
      PER_MILLION_OPTIONS),
  };
  // console.log(key)

  let count;
  if (key === 'population') {
    count = type === 'total' ? data?.meta?.population : 0;
  } else if (key === 'tested') {
    // console.log(data)
    count = data?.[type]?.tested;
  } else if (key === 'active') {
    // const confirmed = data?.[type]?.confirmed || 0;
    // const deceased = data?.[type]?.deceased || 0;
    // const recovered = data?.[type]?.recovered || 0;
    // const other = data?.[type]?.other || 0;
    // count = confirmed - deceased - recovered - other;
    // New dataset has active values directly
    count = data?.[type]?.active || 0;
  } else {
    count = data?.[type]?.[key];
  }

  if (normalizeBy) {
    if (type === 'total') {
      const normStatistic = getStatistic(data, 'total', normalizeBy);
      count /= normStatistic;
    } else {
      const currStatisticDelta = count;
      const currStatistic = getStatistic(data, 'total', key);
      const prevStatistic = currStatistic - currStatisticDelta;

      const normStatisticDelta = getStatistic(data, 'delta', {
        key: normalizeBy,
      });
      const normStatistic = getStatistic(data, 'total', normalizeBy);
      const prevNormStatistic = normStatistic - normStatisticDelta;

      count = currStatistic / normStatistic - prevStatistic / prevNormStatistic;
    }
  }

  return (multiplyFactor || 1) * ((isFinite(count) && count) || 0);
};

export const getTableStatistic = (
  data,
  statistic,
  isPerMillion,
  lastUpdatedTT
) => {
  const expired = false;
    // (STATISTIC_OPTIONS[statistic].key === 'tested' ||
    //   STATISTIC_OPTIONS[statistic].normalizeByKey === 'tested') &&
    // differenceInDays(
    //   lastUpdatedTT,
    //   parseNZDate(data.meta?.tested?.['last_updated'])
    // ) > TESTED_LOOKBACK_DAYS;
    // if(STATISTIC_OPTIONS[statistic].key === 'tested')
      // console.log(STATISTIC_OPTIONS[statistic].key, expired)
  const total = !expired
    ? getStatistic(data, 'total', statistic, isPerMillion)
    : 0;
  const delta = !expired
    ? getStatistic(data, 'delta', statistic, isPerMillion)
    : 0;
  return {total, delta};
};

export const fetcher = (url) => {
  return fetch(url).then((response) => {
    return response.json();
  });
};
