import HeaderCell from './HeaderCell';
import TableLoader from './loaders/Table';
import TableDeltaHelper from './snippets/TableDeltaHelper';

import {TABLE_FADE_IN, TABLE_FADE_OUT} from '../animations';
import {
  DISTRICT_TABLE_COUNT,
  CITY_NAMES,
  STATISTIC_CONFIGS,
  TABLE_STATISTICS,
  TABLE_STATISTICS_EXPANDED,
  UNASSIGNED_STATE_CODE,
} from '../constants';
import {getTableStatistic, parseNZDate} from '../utils/commonFunctions';

import {
  FilterIcon,
  FoldDownIcon,
  InfoIcon,
  OrganizationIcon,
  QuestionIcon,
} from '@primer/octicons-v2-react';
import classnames from 'classnames';
import {max} from 'date-fns';
import equal from 'fast-deep-equal';
import produce from 'immer';
import React, {useCallback, useEffect, useMemo, useState, lazy} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {useTrail, useTransition, animated, config} from 'react-spring';
import {useSessionStorage} from 'react-use';
// eslint-disable-next-line
import worker from 'workerize-loader!../workers/getDistricts';

const Row = lazy(() => import('./Row'));

function Table({
  data: states,
  date: timelineDate,
  regionHighlighted,
  setRegionHighlighted,
  expandTable,
  setExpandTable,
}) {
  const {t} = useTranslation();
  const [sortData, setSortData] = useSessionStorage('sortData', {
    sortColumn: 'confirmed',
    isAscending: false,
    delta: false,
  });

  const handleSortClick = useCallback(
    (statistic) => {
      if (sortData.sortColumn !== statistic) {
        setSortData(
          produce(sortData, (draftSortData) => {
            draftSortData.sortColumn = statistic;
          })
        );
      } else {
        setSortData(
          produce(sortData, (draftSortData) => {
            draftSortData.isAscending = !sortData.isAscending;
          })
        );
      }
    },
    [sortData, setSortData]
  );

  const trail = useTrail(3, {
    from: {transform: 'translate3d(0, 10px, 0)', opacity: 0},
    to: {transform: 'translate3d(0, 0px, 0)', opacity: 1},
    config: config.wobbly,
  });

  const [districts, setDistricts] = useState();

  const [tableOption, setTableOption] = useState('States');
  const [isPerMillion, setIsPerMillion] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const lastUpdatedTT = useMemo(() => {
    const updatedDates = [
      states['TT']?.meta?.['last_updated'] || timelineDate,
      states['TT']?.meta?.tested?.['last_updated'],
    ];
    return max(
      updatedDates.filter((date) => date).map((date) => parseNZDate(date))
    );
  }, [states, timelineDate]);

  const sortingFunction = useCallback(
    (regionKeyA, regionKeyB) => {
      if (sortData.sortColumn !== 'regionName') {
        const statisticConfig = STATISTIC_CONFIGS[sortData.sortColumn];
        const dataType =
          sortData.delta && !statisticConfig.hideDelta ? 'delta' : 'total';

        const statisticA = getTableStatistic(
          districts?.[regionKeyA] || states[regionKeyA],
          sortData.sortColumn,
          isPerMillion,
          lastUpdatedTT
        )[dataType];
        const statisticB = getTableStatistic(
          districts?.[regionKeyB] || states[regionKeyB],
          sortData.sortColumn,
          isPerMillion,
          lastUpdatedTT
        )[dataType];
        return sortData.isAscending
          ? statisticA - statisticB
          : statisticB - statisticA;
      } else {
        const regionNameA =
          districts?.[regionKeyA]?.districtName || CITY_NAMES[regionKeyA];
        const regionNameB =
          districts?.[regionKeyB]?.districtName || CITY_NAMES[regionKeyB];
        return sortData.isAscending
          ? regionNameA.localeCompare(regionNameB)
          : regionNameB.localeCompare(regionNameA);
      }
    },
    [
      districts,
      isPerMillion,
      lastUpdatedTT,
      sortData.delta,
      sortData.isAscending,
      sortData.sortColumn,
      states,
    ]
  );

  const _setTableOption = useCallback(() => {
    setTableOption((prevTableOption) =>
      prevTableOption === 'States' ? 'Districts' : 'States'
    );
  }, []);

  useEffect(() => {
    const workerInstance = worker();
    workerInstance.getDistricts(states);
    workerInstance.addEventListener('message', (message) => {
      if (message.data.type !== 'RPC') {
        setDistricts(message.data);
        workerInstance.terminate();
      }
    });
  }, [tableOption, states]);

  const transition = useTransition(isInfoVisible, null, {
    from: TABLE_FADE_OUT,
    enter: TABLE_FADE_IN,
    leave: TABLE_FADE_OUT,
  });

  const tableStatistics = expandTable
    ? TABLE_STATISTICS_EXPANDED
    : TABLE_STATISTICS;

  return (
    <React.Fragment>
      <div className="table-top">
        {/* <animated.div
          className={classnames('option-toggle', {
            'is-highlighted': tableOption === 'Districts',
          })}
          onClick={_setTableOption}
          style={trail[0]}
        >
          <OrganizationIcon size={14} />
        </animated.div> */}

        <animated.div
          className={classnames('million-toggle', {
            'is-highlighted': isPerMillion,
          })}
          onClick={setIsPerMillion.bind(this, !isPerMillion)}
          style={trail[0]}
        >
          <span>{t('10K')}</span>
        </animated.div>

        <animated.div
          className={classnames('info-toggle', {
            'is-highlighted': isInfoVisible,
          })}
          onClick={setIsInfoVisible.bind(this, !isInfoVisible)}
          style={trail[0]}
        >
          <QuestionIcon size={14} />
        </animated.div>

        <animated.div
          className={classnames('expand-table-toggle', {
            'is-highlighted': expandTable,
          })}
          style={trail[1]}
          onClick={setExpandTable.bind(this, !expandTable)}
        >
          <FoldDownIcon size={16} />
        </animated.div>
      </div>

      {transition.map(({item, key, props}) =>
        item ? (
          <animated.div key={key} className="table-helper" style={props}>
            <div className="helper-top">
              <div className="helper-left">
                {/* <div className="info-item">
                  <span>
                    <OrganizationIcon size={14} />
                  </span>
                  <p>{`Toggle between States/Districts`}</p>
                </div> */}

                <div className="info-item">
                  <h5>{t('10K')}</h5>
                  <p>{t('Per Ten Thousand People')}</p>
                </div>

                <div className="info-item sort">
                  <span>
                    <FilterIcon size={14} />
                  </span>
                  <p>{t('Sort by Descending')}</p>
                </div>

                <div className="info-item sort invert">
                  <span>
                    <FilterIcon size={14} />
                  </span>
                  <p>{t('Sort by Ascending')}</p>
                </div>

                <div className="info-item sort">
                  <TableDeltaHelper />
                </div>

                {/* <div className="info-item notes">
                  <span>
                    <InfoIcon size={15} />
                  </span>
                  <p>Notes</p>
                </div> */}
              </div>
              <div className="helper-right">
                <div className="info-item">
                  <p style={{whiteSpace: "nowrap"}}>{t('Units')}</p>
                </div>
                {Object.entries({'1K': 3}).map(
                  ([abbr, exp]) => (
                    <div className="info-item" key={abbr}>
                      <h5>{abbr}</h5>
                      <p>
                        10
                        <sup
                          style={{
                            verticalAlign: 'baseline',
                            position: 'relative',
                            top: '-.4em',
                          }}
                        >
                          {exp}
                        </sup>
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            <h5 className="text">
              {t('Compiled from the NZ Ministry Of Health. figures')},{' '}
              {/* <Link to="/about">{t('know more')}!</Link> */}
              <a href="https://www.stats.govt.nz/experimental/covid-19-data-portal" target="_blank" rel="noopener noreferrer">{t('know more')}</a>
              <br/>
              <br/>
              <span>{t("New Zealand's COVID19 data is collected per DHB (District Health Board) rather than direct regional district boundaries.")}</span>
              <a target="_blank" href="https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-situation/covid-19-current-cases" rel="noopener noreferrer">{t('Source')}</a>
            </h5>
          </animated.div>
        ) : null
      )}

      <div className="table-container">
        <div
          className="table fadeInUp"
          style={{
            gridTemplateColumns: `repeat(${tableStatistics.length + 1}, auto)`,
          }}
        >
          <div className="row heading">
            <div
              className="cell heading"
              onClick={handleSortClick.bind(this, 'regionName')}
            >
              <div>{t(tableOption === 'States' ? 'District Health Board' : 'States/UT')}</div>
              {sortData.sortColumn === 'regionName' && (
                <div
                  className={classnames('sort-icon', {
                    invert: sortData.isAscending,
                  })}
                >
                  <FilterIcon size={10} />
                </div>
              )}
            </div>

            {tableStatistics.map((statistic) => (
              <HeaderCell
                key={statistic}
                {...{statistic, sortData, setSortData}}
                handleSort={handleSortClick.bind(this, statistic)}
              />
            ))}
          </div>

          {tableOption === 'States' &&
            Object.keys(states)
              .filter(
                (stateCode) =>
                  stateCode !== 'TT' && //stateCode !== 'New Zealand' &&
                  !(stateCode === UNASSIGNED_STATE_CODE && isPerMillion)
              )
              .sort((a, b) => sortingFunction(a, b))
              .map((stateCode) => {
                return (
                  <Row
                    key={stateCode}
                    data={states[stateCode]}
                    {...{
                      stateCode,
                      isPerMillion,
                      regionHighlighted,
                      setRegionHighlighted,
                      expandTable,
                      lastUpdatedTT,
                    }}
                  />
                );
              })}

          {tableOption === 'Districts' && !districts && <TableLoader />}

          {tableOption === 'Districts' &&
            districts &&
            Object.keys(districts)
              .sort((a, b) => sortingFunction(a, b))
              .slice(0, DISTRICT_TABLE_COUNT)
              .map((districtKey) => {
                return (
                  <Row
                    key={districtKey}
                    data={districts[districtKey]}
                    districtName={districts[districtKey].districtName}
                    {...{
                      isPerMillion,
                      regionHighlighted,
                      setRegionHighlighted,
                      expandTable,
                      lastUpdatedTT,
                    }}
                  />
                );
              })}

          <Row
            key={'TT'}
            data={states['TT']}
            stateCode={'TT'}
            {...{
              isPerMillion,
              regionHighlighted,
              setRegionHighlighted,
              expandTable,
              lastUpdatedTT,
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const isEqual = (prevProps, currProps) => {
  // console.log(prevProps.data['TT'], currProps.data['TT'])
  if (
    !equal(
      prevProps.regionHighlighted?.districtName,
      currProps.regionHighlighted?.districtName
    )
  ) {
    return false;
  } else if (
    !equal(
      prevProps.regionHighlighted?.stateCode,
      currProps.regionHighlighted?.stateCode
    )
  ) {
    return false;
  } else if (!equal(prevProps.date, currProps.date)) {
    return false;
  } else if (
    !equal(
      prevProps.data['TT'].total.confirmed,
      currProps.data['TT'].total.confirmed
    )
  ) {
    return false;
  } else if (!equal(prevProps.expandTable, currProps.expandTable)) {
    return false;
  } else return true;
};

export default React.memo(Table, isEqual);
