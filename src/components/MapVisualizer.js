import MapLegend from './MapLegend';

import {
  D3_TRANSITION_DURATION,
  MAP_META,
  MAP_TYPES,
  MAP_VIEWS,
  MAP_VIZS,
  CITY_CODES,
  CITY_NAMES,
  STATISTIC_CONFIGS,
  UNKNOWN_DISTRICT_KEY,
  TOPO2CITY_NAME,
  // TOPO2CITY_NAME,
} from '../constants';
import {
  formatNumber,
  getStatistic,
  toTitleCase,
} from '../utils/commonFunctions';

import {AlertIcon} from '@primer/octicons-v2-react';
import classnames from 'classnames';
import {max} from 'd3-array';
import {json} from 'd3-fetch';
import {geoMercator, geoTransverseMercator, geoIdentity, geoPath} from 'd3-geo';
import {scaleSqrt, scaleSequential} from 'd3-scale';
// eslint-disable-next-line
// import worker from 'workerize-loader!../workers/mapVisualizer';
import {
  interpolateReds,
  interpolateBlues,
  interpolateGreens,
  interpolateGreys,
  interpolatePurples,
  interpolateOranges,
} from 'd3-scale-chromatic';
import {select, event} from 'd3-selection';
import {transition} from 'd3-transition';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {useHistory} from 'react-router-dom';
import useSWR from 'swr';
import * as topojson from 'topojson';

const [width, height] = [432, 488];

const CODE_1 = "DHB_code"; //ID_1;
const CODE_2 = "MoH_Char_C"; //ID_2; 
const NAME_1 = "DHB_name"; // NAME_1
const NAME_2 = "";

const colorInterpolator = (statistic) => {
  switch (statistic) {
    case 'confirmed':
      return (t) => interpolateReds(t * 0.85);
    case 'active':
      return (t) => interpolateBlues(t * 0.85);
    case 'recovered':
      return (t) => interpolateGreens(t * 0.85);
    case 'deceased':
      return (t) => interpolateGreys(t * 0.85);
    case 'tested':
      return (t) => interpolatePurples(t * 0.85);
    default:
      return (t) => interpolateOranges(t * 0.85);
  }
};

const getTotalStatistic = (data, statistic) => {
  return getStatistic(data, 'total', statistic);
};

function MapVisualizer({
  mapCode,
  mapView,
  mapViz,
  data,
  changeMap,
  regionHighlighted,
  setRegionHighlighted,
  statistic,
  isCountryLoaded,
}) {
  const {t} = useTranslation();
  const svgRef = useRef(null);

  const mapMeta = MAP_META[mapCode];
  const history = useHistory();

  const {data: geoData} = useSWR(
    mapMeta.geoDataFile,
    async (file) => {
      return await json(file);
    },
    {suspense: false, revalidateOnFocus: false}
  );

  const statisticMax = useMemo(() => {
    const stateCodes = Object.keys(data).filter(
      (stateCode) =>
        stateCode !== 'TT' //&& Object.keys(MAP_META).includes(stateCode)
    );
    return max(stateCodes, (stateCode) => getTotalStatistic(data[stateCode], statistic))
    // mapView === MAP_VIEWS.STATES || mapView === MAP_VIEWS.COUNTRY
      // ?
       max(stateCodes, (stateCode) =>
          getTotalStatistic(data[stateCode], statistic)
        )
      // : max(stateCodes, (stateCode) =>
      //     data[stateCode]?.districts
      //       ? max(Object.values(data[stateCode].districts), (districtData) =>
      //           getTotalStatistic(districtData, statistic)
      //         )
      //       : 0
      //   );
  }, [data, mapView, statistic]);

  const statisticTotal = useMemo(() => {
    return getTotalStatistic(data[mapCode], statistic);
  }, [data, mapCode, statistic]);

  const mapScale = useMemo(() => {
    if (mapViz === MAP_VIZS.BUBBLES) {
      return scaleSqrt([0, Math.max(statisticMax, 1)], [0, 40])
        .clamp(true)
        .nice(3);
    } else {
      return scaleSequential(
        [0, Math.max(1, statisticMax)],
        colorInterpolator(statistic)
      ).clamp(true);
    }
  }, [mapViz, statistic, statisticMax]);
  // console.log("mapViz === MAP_VIZS.BUBBLES: ", mapViz === MAP_VIZS.BUBBLES)

  const path = useMemo(() => {
    if (!geoData) return null;
    
    // console.log(mapMeta);
    const topology = topojson.feature(
      geoData,
      // geoData.objects[mapMeta.graphObjectStates || mapMeta.graphObjectDistricts]
      geoData.objects["NZL_adm2"]
    );
    // return geoPath(geoMercator().fitSize([width, height], topology));
    // return geoIdentity()
      // .reflectY(true)
      // .fitSize([width, height], topology)

    // Have to change from original, which was geoIdentity, to using projection
    // const projection = geoMercator()
      // .fitSize([width, height], topology)
      // .translate([width / 2, height / 2])
      // .precision(0.5);
    // console.log(projection)
    // return geoPath(null)
    return geoPath(
      geoTransverseMercator()
      .reflectY(true)
      .reflectX(true)
      .fitSize([width, height], topology)
    )
    // return geoPath(geoIdentity().fitSize([width, height], topology))
    // return geoPath(projection);
    // return geoPath(geoIdentity());
  }, [geoData]);

  // const fillOpacity = useCallback(
  //   (alpha) => {
  //     // console.log(alpha, STATISTIC_CONFIGS[statistic].color);
  //     return mapViz === MAP_VIZS.CHOROPLETH ? '1' : '0'
  //   },
  //   [data, mapScale, statistic, mapViz]
  // )
  
  // https://css-tricks.com/8-digit-hex-codes/
  const fillColor = useCallback(
    // 'rgba(255,255,255,0)'
    (d) => {
      // console.log(d)
      if(!d) return 'rgba(255,255,255,0)';
      const stateCode = CITY_CODES[TOPO2CITY_NAME[d.properties[CODE_2]]];
      const stateData = data[stateCode];
      let n;
      if (mapViz === MAP_VIZS.CHOROPLETH) {
        // return 'rgba(255,255,255,1)'
        
        n = getTotalStatistic(stateData, statistic);
        n = mapScale(n);
        // n = "rgba(255,0,0,1)";
        Array.from(document.getElementsByClassName('region')).forEach(
          el => el.style.opacity = 1
        );
      }
      else if(mapViz === MAP_VIZS.BUBBLES){
        n = "rgba(255,255,255,0)";
        
      }
      // console.log("new color: ", n)
      // else 
      //   n = "#ffffff00";
        // n = 'rgba(255,255,255,1)'
      // const color = n === 0 ? '#ffffff00' : 
      // const color = n === 0 ? 'rgba(255,255,255,1)' : mapScale(n);
      // const color = n === 0 ? 'rgb(255,255,255)' : 'rgb(255,0,0)';
      return n;
    },
    [data, mapScale, statistic]
  );

  const strokeColor = useCallback(
    (alpha) => {
      return STATISTIC_CONFIGS[statistic].color + alpha;
    },
    [statistic]
  );

  const features = useMemo(() => {
    if (!geoData) return null;
    const featuresWrap =
      mapView === MAP_VIEWS.COUNTRY
        // ? topojson.feature(geoData, geoData.objects.states).features
        ? topojson.feature(geoData, geoData.objects.NZL_adm2).features
        : mapMeta.mapType === MAP_TYPES.COUNTRY && mapViz === MAP_VIZS.BUBBLES
        ? [
            // ...topojson.feature(geoData, geoData.objects.states).features,
            ...topojson.feature(geoData, geoData.objects.NZL_adm2).features,
            ...topojson.feature(geoData, geoData.objects.NZL_adm2).features,
          ]
        : topojson.feature(geoData, geoData.objects.NZL_adm2).features;

    // Add id to each feature
    return featuresWrap.map((feature) => {
      const district = feature.properties[CODE_1];
      const state = feature.properties[CODE_2];
      const obj = Object.assign({}, feature);
      obj.id = `${mapCode}-${state}${district ? '-' + district : ''}`;
      return obj;
    });
  }, [geoData, mapCode, mapView, mapViz, mapMeta]);

  const populateTexts = useCallback(
    (regionSelection) => {
      regionSelection.select('title').text((d) => {
        if (mapViz === MAP_VIZS.CHOROPLETH) {
          const state = d.properties[CODE_2];
          const stateCode = CITY_CODES[state];
          const district = d.properties[CODE_1];

          const stateData = data[stateCode];
          const districtData = stateData?.districts?.[district];
          let n;
          if (district) n = getTotalStatistic(districtData, statistic);
          else n = getTotalStatistic(stateData, statistic);
          return (
            formatNumber(100 * (n / (statisticTotal || 0.001))) +
            '% from ' +
            toTitleCase(district ? district : state)
          );
        }
      });
    },
    [mapViz, data, statistic, statisticTotal]
  );

  const onceTouchedRegion = useRef(null);

  // Reset on tapping outside map
  useEffect(() => {
    const svg = select(svgRef.current);

    svg.attr('pointer-events', 'auto').on('click', () => {
      onceTouchedRegion.current = null;
      setRegionHighlighted({
        stateCode: mapCode,
        districtName: null,
      });
    });
  }, [mapCode, setRegionHighlighted]);

  // Choropleth
  useEffect(() => {
    if (!geoData) return;
    const svg = select(svgRef.current);
    const T = transition().duration(D3_TRANSITION_DURATION);

    // console.log("mapViz === MAP_VIZS.BUBBLES: ", mapViz === MAP_VIZS.BUBBLES);
    // console.log("features: ", features);
    const regionSelection = svg
      .select('.regions')
      .selectAll('path')
      .data(mapViz !== MAP_VIZS.BUBBLES ? features : [], (d) => d.id)
      .data(features, (d) => d.id)
      .join(
        (enter) =>
          enter
            .append('path')
            .attr('d', path)
            .attr("class", "region")
            .attr('stroke-width', 1.8)
            .attr('stroke-opacity', 0)
            .style('cursor', 'pointer')
            .on('mouseenter', (d) => {
              // console.log('mouse entered region: ', d.properties);
              // console.log('CITY_CODES[d.properties[CODE_2]]: ', d.properties[CODE_2])
              setRegionHighlighted({
                stateCode: CITY_CODES[TOPO2CITY_NAME[d.properties[CODE_2]]],
                districtName: d.properties[NAME_1]// + (d.properties[NAME_2] !== d.properties[NAME_1] && d.properties[NAME_1] ? ", " + d.properties[NAME_2] : ""),
              });
            })
            .attr('fill', '#fff0')
            // .attr('fill', fillColor)
            .attr('stroke', '#fff0')
            .call((enter) => {
              enter.append('title');
            }),
        (update) => update,
        (exit) =>
          exit
            .transition(T)
            .attr('stroke', '#fff0')
            .attr('fill', '#fff0')
            // .attr('fill', fillColor)
            .remove()
      )
      .attr('pointer-events', 'all')
      .on('touchstart', (d) => {
        if (onceTouchedRegion.current === d) onceTouchedRegion.current = null;
        else onceTouchedRegion.current = d;
      })
      .on('click', (d) => {
        event.stopPropagation();
        const stateCode = CITY_CODES[TOPO2CITY_NAME[d.properties[CODE_2]]];
        if (
          onceTouchedRegion.current ||
          mapMeta.mapType === MAP_TYPES.STATE ||
          !data[stateCode]?.districts
        )
          return;
        // Disable pointer events till the new map is rendered
        svg.attr('pointer-events', 'none');
        svg.select('.regions').selectAll('path').attr('pointer-events', 'none');
        // Switch map
        // history.push(
        //   `/state/${stateCode}${window.innerWidth < 769 ? '#MapExplorer' : ''}`
        // );
      })
      .call((sel) => {
        return sel
          .transition(T)
          .attr('fill', fillColor)
          // .attr('fill', '#fff0')
          .attr('stroke', strokeColor.bind(this, ''));
      });

    window.requestIdleCallback(() => {
      populateTexts(regionSelection);
    });
  }, [
    mapViz,
    data,
    features,
    fillColor,
    geoData,
    history,
    mapMeta.mapType,
    path,
    populateTexts,
    setRegionHighlighted,
    strokeColor,
    // fillOpacity,
  ]);

  // Bubble
  useEffect(() => {
    if (!features) return;

    const svg = select(svgRef.current);
    const T = transition().duration(D3_TRANSITION_DURATION);

    let circlesData = [];

    if (mapViz === MAP_VIZS.BUBBLES) {
      circlesData = features
        .map((feature) => {
          const stateCode = CITY_CODES[TOPO2CITY_NAME[feature.properties[CODE_2]]];
          // const districtName = feature.properties[CODE_1];
          const stateData = data[stateCode];

          if (mapView === MAP_VIEWS.COUNTRY) {
            feature.value = getTotalStatistic(stateData, statistic);
          } else if (mapView === MAP_VIEWS.DISTRICTS) {
            // const districtData = stateData?.districts?.[districtName];
            const districtData = stateData;
            // console.log(districtData, statistic)
            // if (districtName)
              feature.value = getTotalStatistic(districtData, statistic);
            // else
            //   feature.value = getTotalStatistic(
            //     stateData?.districts?.[UNKNOWN_DISTRICT_KEY],
            //     statistic
            //   );
          }

          return feature;
        })
        .sort((featureA, featureB) => featureB.value - featureB.value);
    }

    svg
      .select('.circles')
      .selectAll('circle')
      .data(circlesData, (feature) => feature.id)
      .join(
        (enter) =>
          enter
            .append('circle')
            .attr(
              'transform',
              (feature) => `translate(${path.centroid(feature)})`
            )
            .attr('fill-opacity', 0.25)
            .style('cursor', 'pointer')
            .attr('pointer-events', 'all'),
        (update) => update,
        (exit) => exit.call((exit) => exit.transition(T).attr('r', 0).remove())
      )
      .on('mouseenter', (feature) => {
        
        setRegionHighlighted({
          stateCode: CITY_CODES[TOPO2CITY_NAME[feature.properties[CODE_2]]],
          districtName:
            mapView === MAP_VIEWS.COUNTRY
              ? null
              : feature.properties[NAME_1]// + (feature.properties[NAME_2] !== feature.properties[NAME_1] && feature.properties[NAME_1] ? ", " + feature.properties[NAME_2] : ""),
              //: feature.properties.CODE_1 || UNKNOWN_DISTRICT_KEY,
        });
      })
      .on('touchstart', (feature) => {
        if (onceTouchedRegion.current === feature)
          onceTouchedRegion.current = null;
        else onceTouchedRegion.current = feature;
      })
      .on('click', (feature) => {
        event.stopPropagation();
        if (onceTouchedRegion.current || mapMeta.mapType === MAP_TYPES.STATE)
          return;
        // history.push(
        //   `/state/${CITY_CODES[feature.properties[CODE_2]]}${
        //     window.innerWidth < 769 ? '#MapExplorer' : ''
        //   }`
        // );
      })
      .transition(T)
      .attr('fill', STATISTIC_CONFIGS[statistic].color + '70')
      .attr('stroke', STATISTIC_CONFIGS[statistic].color + '70')
      .attr('r', (feature) => {
        return mapScale(feature.value);
      });
  }, [
    mapMeta.mapType,
    mapViz,
    mapView,
    data,
    features,
    history,
    mapScale,
    path,
    setRegionHighlighted,
    statistic,
  ]);

  // Boundaries
  useEffect(() => {
    if (!geoData) return;
    const svg = select(svgRef.current);
    const T = transition().duration(D3_TRANSITION_DURATION);

    let meshStates = [];
    let meshDistricts = [];

    if (mapMeta.mapType === MAP_TYPES.COUNTRY) {
      meshStates = [topojson.mesh(geoData, geoData.objects.NZL_adm2)];
      meshStates[0].id = `${mapCode}-states`;
    }

    if (
      mapMeta.mapType === MAP_TYPES.STATE ||
      (mapView === MAP_VIEWS.DISTRICTS && mapViz === MAP_VIZS.CHOROPLETH)
    ) {
      // Add id to mesh
      meshDistricts = [topojson.mesh(geoData, geoData.objects.NZL_adm2)];
      meshDistricts[0].id = `${mapCode}-districts`;
    }

    svg
      .select('.state-borders')
      .attr('fill', 'none')
      .attr('stroke-width', 1.5)
      .selectAll('path')
      .data(meshStates, (d) => d.id)
      .join(
        (enter) => enter.append('path').attr('d', path).attr('stroke', '#fff0'),
        (update) => update,
        (exit) => exit.transition(T).attr('stroke', '#fff0').remove()
      )
      .transition(T)
      .attr('stroke', strokeColor.bind(this, '40'));

    svg
      .select('.district-borders')
      .attr('fill', 'none')
      .attr('stroke-width', 1.5)
      .selectAll('path')
      .data(meshDistricts, (d) => d.id)
      .join(
        (enter) =>
          enter
            .append('path')
            .attr('d', path)
            .attr('d', path)
            .attr('stroke', '#fff0'),
        (update) => update,
        (exit) => exit.transition(T).attr('stroke', '#fff0').remove()
      )
      .transition(T)
      .attr('stroke', strokeColor.bind(this, '40'));
  }, [
    geoData,
    mapMeta,
    mapCode,
    mapViz,
    mapView,
    statistic,
    path,
    strokeColor,
  ]);

  // Highlight
  useEffect(() => {
    const stateCode = regionHighlighted.stateCode;
    const stateName = CITY_NAMES[stateCode];
    // const district = regionHighlighted.districtName;
    // console.log(stateCode, stateName, district)
    const svg = select(svgRef.current);

    if (mapViz === MAP_VIZS.BUBBLES) {
      svg
        .select('.circles')
        .selectAll('circle')
        .attr('fill-opacity', (d) => {
          const highlighted =
            stateName === TOPO2CITY_NAME[d.properties[CODE_2]]
            // ((!district && stateCode !== mapCode) ||
            //   district === d.properties[CODE_1] ||
            //   mapView === MAP_VIEWS.COUNTRY ||
            //   (district === UNKNOWN_DISTRICT_KEY && !d.properties[CODE_1]));
          // console.log("highlighted: ", stateName, TOPO2CITY_NAME[d.properties[CODE_2]]  );
          return highlighted ? 1 : 0.25;
        });
    } else {
      svg
        .select('.regions')
        .selectAll('path')
        .each(function (d) {
          const highlighted =
            stateName === TOPO2CITY_NAME[d.properties[CODE_2]]
            // stateName === d.properties[CODE_2] &&
            // ((!district && stateCode !== mapCode) ||
            //   district === d.properties[CODE_1] ||
            //   mapView === MAP_VIEWS.COUNTRY);
          if (highlighted) this.parentNode.appendChild(this);
          select(this).attr('stroke-opacity', highlighted ? 1 : 0);
        });
    }
  }, [
    geoData,
    data,
    mapCode,
    mapView,
    mapViz,
    regionHighlighted.stateCode,
    regionHighlighted.districtName,
    statistic,
  ]);

  return (
    <React.Fragment>
      <div className="svg-parent">
        <svg
          id="chart"
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid meet"
          ref={svgRef}
        >
          <g className="regions" />
          <g className="state-borders" />
          <g className="district-borders" />
          <g className="circles" />
        </svg>
        {mapMeta.mapType === MAP_TYPES.STATE &&
          !!getTotalStatistic(
            data[mapCode]?.districts?.[UNKNOWN_DISTRICT_KEY],
            statistic
          ) && (
            <div className={classnames('disclaimer', `is-${statistic}`)}>
              {/* <AlertIcon />
              <span>
                {t('District-wise data not available in state bulletin')}
              </span> */}
            </div>
          )}
      </div>

      {mapScale && <MapLegend {...{data, mapViz, mapScale, statistic}} />}

      <svg style={{position: 'absolute', height: 0}}>
        <defs>
          <filter id="balance-color" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0.91372549  0           0            0  0.08627451
                      0           0.91372549  0            0  0.08627451
                      0           0           0.854901961  0  0.145098039
                      0           0           0            1  0"
            />
          </filter>
        </defs>
      </svg>
    </React.Fragment>
  );
}

export default MapVisualizer;
