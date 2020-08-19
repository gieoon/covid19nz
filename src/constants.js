export const API_ROOT_URL = 
  // 'https://api.covid19india.org/v4/min';
  // 'http://api.covid19live.com/data/processed';
  'https://gieoon.github.io/api.covid19nz/data/processed';

export const LOCALE_SHORTHANDS = {
  english: 'en-US',
  hindi: 'hi',
  telugu: 'te',
  kannada: 'en-US',
  gujarati: 'gu',
  marathi: 'en-US',
  tamil: 'ta',
  bengali: 'bn',
  punjabi: 'en-US',
  malayalam: 'en-US',
  odiya: 'en-US',
};

export const STATISTIC_DEFINITIONS = {
  confirmed: {
    displayName: 'confirmed',
    color: '#ff073a',
    format: 'int',
    options: {key: 'confirmed'},
  },
  active: {
    displayName: 'active',
    color: '#007bff',
    format: 'int',
    options: {key: 'active'},
    hideDelta: true,
  },
  recovered: {
    displayName: 'recovered',
    color: '#28a745',
    format: 'int',
    options: {key: 'recovered'},
  },
  deceased: {
    displayName: 'deceased',
    color: '#6c757d',
    format: 'int',
    options: {key: 'deceased'},
  },
  other: {
    displayName: 'other',
    format: 'int',
    options: {key: 'other'},
  },
  tested: {
    displayName: 'tested',
    color: '#4b1eaa',
    format: 'short',
    options: {key: 'tested'},
  },
  activeRatio: {
    displayName: 'active ratio',
    format: '%',
    options: {
      key: 'active',
      normalizeByKey: 'confirmed',
      multiplyFactor: 100,
    },
    hideDelta: true,
  },
  recoveryRatio: {
    displayName: 'recovery ratio',
    format: '%',
    options: {
      key: 'recovered',
      normalizeByKey: 'confirmed',
      multiplyFactor: 100,
    },
    hideDelta: true,
  },
  cfr: {
    displayName: 'case fatality ratio',
    format: '%',
    options: {
      key: 'deceased',
      normalizeByKey: 'confirmed',
      multiplyFactor: 100,
    },
    hideDelta: true,
  },
  tpr: {
    displayName: 'test positivity ratio',
    color: '#fd7e14',
    format: '%',
    options: {
      key: 'confirmed',
      normalizeByKey: 'tested',
      multiplyFactor: 100,
    },
    hideDelta: true,
  },
  population: {
    displayName: 'population',
    format: 'short',
    options: {key: 'population'},
    hideDelta: true,
  },
};

const definitions = Object.keys(STATISTIC_DEFINITIONS).reduce(
  (acc, statistic) => {
    const {options, ...config} = STATISTIC_DEFINITIONS[statistic];
    acc.options[statistic] = options;
    acc.configs[statistic] = config;
    return acc;
  },
  {options: {}, configs: {}}
);

export const STATISTIC_CONFIGS = definitions.configs;
export const STATISTIC_OPTIONS = definitions.options;

export const PER_MILLION_OPTIONS = {
  normalizeByKey: 'population',
  multiplyFactor: 1e6,
};

export const NAN_STATISTICS = ['tested', 'tpr', 'population'];

export const PRIMARY_STATISTICS = [
  'confirmed',
  'active',
  'recovered',
  'deceased',
];

export const TABLE_STATISTICS = [...PRIMARY_STATISTICS, 'tested'];

export const TABLE_STATISTICS_EXPANDED = Object.keys(STATISTIC_DEFINITIONS);

export const TIMESERIES_STATISTICS = [...PRIMARY_STATISTICS, 'tested'];

export const UPDATES_COUNT = 5;

export const DISTRICT_TABLE_COUNT = 30;

export const D3_TRANSITION_DURATION = 300;

export const MINIGRAPH_LOOKBACK_DAYS = 20;

export const TESTED_LOOKBACK_DAYS = 7;

export const UNASSIGNED_STATE_CODE = 'UN';

export const UNKNOWN_DISTRICT_KEY = 'Unknown';

export const ISO_DATE_REGEX = /^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g;

export const NZ_ISO_SUFFIX = 'T00:00:00+12:00';

export const SPRING_CONFIG_NUMBERS = {clamp: true, precision: 1};

export const TIMESERIES_CHART_TYPES = {
  total: 'Cumulative',
  delta: 'Daily',
};

export const TIMESERIES_LOOKBACKS = {
  BEGINNING: 'Beginning',
  THREE_MONTHS: '3 Months',
  MONTH: '1 Month',
};

export const MAP_VIZS = {
  CHOROPLETH: 0,
  BUBBLES: 1,
};

export const MAP_VIEWS = {
  COUNTRY: 0,
  DISTRICTS: 1,
};

export const MAP_TYPES = {
  COUNTRY: 0,
  STATE: 1,
};

export const MAPS_DIR =
  process.env.NODE_ENV === 'production' ? '/mini_maps' : '/projected_maps';

export const MAP_META = {
  UP: {
    geoDataFile: `${MAPS_DIR}/uttarpradesh.json`,
    mapType: MAP_TYPES.STATE,
  },
  WB: {
    geoDataFile: `${MAPS_DIR}/westbengal.json`,
    mapType: MAP_TYPES.STATE,
  },
  // TT: {
  //   geoDataFile: `${MAPS_DIR}/india.json`,
  //   mapType: MAP_TYPES.COUNTRY,
  // },
  // TT: {
  //   geoDataFile: `${MAPS_DIR}/new-zealand-districts.json`,
  //   mapType: MAP_TYPES.COUNTRY,
  // },
  // TT: {
  //   geoDataFile: `${MAPS_DIR}/5.9-kx-small-district-health-board-2015.json`,
  //   mapType: MAP_TYPES.COUNTRY,
  // }
  //https://mapshaper.org/
  TT: {
    geoDataFile: `${MAPS_DIR}/0.21-NZ_District_Health_Board_boundaries.json`,
    mapType: MAP_TYPES.COUNTRY,
  }
  // TT: {
  //   // This file is too big
  //   geoDataFile: `${MAPS_DIR}/NZ_District_Health_Board_boundaries.json`,
  //   mapType: MAP_TYPES.COUNTRY,
  // },
};

// Language name to flag image file name
export const LANGUAGE_IMGS = {
  "english": "newzealand.jpg",
  "japanese": "japan.svg",
  "chinese": "china.jpg",
}

export const MAP_LEGEND_HEIGHT = 50;

export const CITY_NAMES = {
  'Auckland': "Auckland",
  'Bay of Plenty': 'Bay of Plenty',
  'Canterbury': 'Canterbury',
  'Capital and Coast': 'Capital and Coast',
  'Counties Manukau': 'Counties Manukau',
  "Hawke's Bay": "Hawke's Bay",
  'Hutt Valley': 'Hutt Valley',
  'Lakes': 'Lakes',
  'Midcentral': 'Midcentral',
  'Nelson Marlborough': 'Nelson Marlborough',
  'Northland': 'Northland',
  'South Canterbury': 'South Canterbury',
  'Southern': 'Southern',
  'Tairawhiti': 'Tairawhiti',
  'Taranaki': 'Taranaki',
  'Waikato': 'Waikato',
  'Wairarapa': 'Wairarapa',
  'Waitemata': 'Waitemata',
  'West Coast': 'West Coast',
  'Whanganui': 'Whanganui',
  'New Zealand': 'New Zealand'
}

// The district name stored in topojson
export const TOPO2CITY_NAME = {
  "NLD": "Northland",
  "NWA": "Waitemata",
  "CAK": "Auckland",
  "SAK": "Counties Manukau",
  "WKO": "Waikato",
  "LKS": "Lakes",
  "BOP": "Bay of Plenty",
  "TRW": "Tairawhiti",
  "TKI": "Taranaki",
  "HWB": "Hawke's Bay",
  "WNI": "Whanganui",
  "MWU": "Midcentral",
  "HUT": "Hutt Valley",
  "CAP": "Capital and Coast",
  "WRP": "Wairarapa",
  "NLM": "Nelson Marlborough",
  "WCO": "West Coast",
  "CTY": "Canterbury",
  "SCY": "South Canterbury",
  "SRN": "Southern",
  "TT": "New Zealand"
}

/*
export const CITY_NAMES = {
  Auckland: "Auckland",
  Franklin: "Franklin",
  Manukau: "Manukau",
  Hamilton: "Hamilton",
  Hauraki: "Hauraki",
  "Matamata-Piako": "Matamata-Piako",
  Otorohanga: "Otorohanga",
  Rotorua: "Rotorua",
  "South Waikato": "South Waikato",
  Taupo: "Taupo",
  "Thames-Coromandel": "Thames-Coromandel",
  Rodney: "Rodney",
  Waitakere: "Waitakere",
  Opotiki: "Opotiki",
  Rotorua: "Rotorua",
  Taupo: "Taupo",
  "Western Bay of Plenty": "Western Bay of Plenty",
  Whakatane: "Whakatane",
  Ashburton: "Ashburton",
  Christchurch: "Christchurch",
  Hurunui: "Hurunui",
  Kaikoura: "Kaikoura",
  Mackenzie: "Mackenzie",
  Selwyn: "Selwyn",
  Timaru: "Timaru",
  Waimakariri: "Waimakariri",
  Waimate: "Waimate",
  Waitaki: "Waitaki",
  Gisborne: "Gisborne",
  "Central Hawke's Bay": "Central Hawke's Bay",
  Hastings: "Hastings",
  "Hastings city": "Hastings city",
  Napier: "Napier",
  Wairoa: "Wairoa",
  Horowhenua: "Horowhenua",
  Manawatu: "Manawatu",
  "Palmerston North": "Palmerston North",
  Rangitikei: "Rangitikei",
  Ruapehu: "Ruapehu",
  Tararua: "Tararua",
  Wanganui: "Wanganui",
  Marlborough: "Marlborough",
  Nelson: "Nelson",
  Tasman: "Tasman",
  "Far North": "Far North",
  Kaipara: "Kaipara",
  Whangarei: "Whangarei",
  "Central Otago": "Central Otago",
  Clutha: "Clutha",
  Dunedin: "Dunedin",
  "Queenstown-Lakes": "Queenstown-Lakes",
  Waitaki: "Waitaki",
  Gore: "Gore",
  Invercargill: "Invercargill",
  Southland: "Southland",
  "New Plymouth": "New Plymouth",
  "South Taranaki": "South Taranaki",
  Stratford: "Stratford",
  Franklin: "Franklin",
  Waikato: "Waikato",
  Waipa: "Waipa",
  Waitomo: "Waitomo",
  Carterton: "Carterton",
  "Hutt city": "Hutt city",
  "Kapiti Coast": "Kapiti Coast",
  Masterton: "Masterton",
  Porirua: "Porirua",
  "South Wairarapa": "South Wairarapa",
  "Upper Hutt": "Upper Hutt",
  Wellington: "Wellington",
  Buller: "Buller",
  Grey: "Grey",
  Westland: "Westland",
  TT: "New Zealand",
}
*/

// export const STATE_NAMES = {
//   AP: 'Andhra Pradesh',
//   AR: 'Arunachal Pradesh',
//   AS: 'Assam',
//   BR: 'Bihar',
//   CT: 'Chhattisgarh',
//   GA: 'Goa',
//   GJ: 'Gujarat',
//   HR: 'Haryana',
//   HP: 'Himachal Pradesh',
//   JH: 'Jharkhand',
//   KA: 'Karnataka',
//   KL: 'Kerala',
//   MP: 'Madhya Pradesh',
//   MH: 'Maharashtra',
//   MN: 'Manipur',
//   ML: 'Meghalaya',
//   MZ: 'Mizoram',
//   NL: 'Nagaland',
//   OR: 'Odisha',
//   PB: 'Punjab',
//   RJ: 'Rajasthan',
//   SK: 'Sikkim',
//   TN: 'Tamil Nadu',
//   TG: 'Telangana',
//   TR: 'Tripura',
//   UT: 'Uttarakhand',
//   UP: 'Uttar Pradesh',
//   WB: 'West Bengal',
//   AN: 'Andaman and Nicobar Islands',
//   CH: 'Chandigarh',
//   DN: 'Dadra and Nagar Haveli and Daman and Diu',
//   DL: 'Delhi',
//   JK: 'Jammu and Kashmir',
//   LA: 'Ladakh',
//   LD: 'Lakshadweep',
//   PY: 'Puducherry',
//   TT: 'New Zealand',
//   [UNASSIGNED_STATE_CODE]: 'Unassigned',
// };

const cityCodes = [];
const cityCodesMap = {};
Object.keys(CITY_NAMES).map((key, index) => {
  cityCodesMap[CITY_NAMES[key]] = key;
  cityCodes.push({code: key, name: CITY_NAMES[key]});
  return null;
});
export const CITY_CODES = cityCodesMap;
export const CITY_CODES_ARRAY = cityCodes;
