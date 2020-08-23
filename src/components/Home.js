import {API_ROOT_URL} from '../constants';
import useIsVisible from '../hooks/useIsVisible';
import useStickySWR from '../hooks/useStickySWR';
import {fetcher} from '../utils/commonFunctions';

import classnames from 'classnames';
import React, {useState, useRef, lazy, Suspense} from 'react';
import {Helmet} from 'react-helmet';
import {useLocation} from 'react-router-dom';
import {useLocalStorage, useSessionStorage, useWindowSize} from 'react-use';


const TimeseriesExplorer = lazy(() => import('./TimeseriesExplorer'));
const MapExplorer = lazy(() => import('./MapExplorer'));
const Actions = lazy(() => import('./Actions'));
const Table = lazy(() => import('./Table'));
const Minigraphs = lazy(() => import('./Minigraphs'));
const Footer = lazy(() => import('./Footer'));
const Search = lazy(() => import('./Search'));
const Level = lazy(() => import('./Level'));
const MapSwitcher = lazy(() => import('./MapSwitcher'));
const StateHeader = lazy(() => import('./StateHeader'));
const TopTitle = lazy(() => import('./TopTitle'));

const GoogleAd = lazy(() => import ('./GoogleAd'));

function Home() {
  const [regionHighlighted, setRegionHighlighted] = useState({
    stateCode: 'TT',
    districtName: null,
  });

  const [anchor, setAnchor] = useLocalStorage('anchor', null);
  const [expandTable, setExpandTable] = useLocalStorage('expandTable', false);
  const [mapStatistic, setMapStatistic] = useSessionStorage(
    'mapStatistic',
    'confirmed'
  );
  const [date, setDate] = useState('');
  // const [date, setDate] = useState('2020-07-21');

  const location = useLocation();

  const {data: timeseries} = useStickySWR(
    `${API_ROOT_URL}/timeseries.min.json`,
    fetcher,
    {
      revalidateOnMount: true,
      refreshInterval: 100000,
    }
  );

  // console.log(date)

  const {data} = useStickySWR(
    `${API_ROOT_URL}/days/data${date ? `-${date}` : ''}.min.json`,
    // `${API_ROOT_URL}/timeseries.min.json`,
    // `https://api.covid19india.org/v4/min/data${date ? `-${date}` : ''}.min.json`,
    fetcher,
    {
      revalidateOnMount: true,
      refreshInterval: 100000,
    }
  );

  const homeRightElement = useRef();
  const isVisible = useIsVisible(homeRightElement);
  const {width} = useWindowSize();

  // console.log(data && data['TT'], date);

  return (
    <React.Fragment>
      <Helmet>
        <title>Coronavirus Outbreak in NZ - nz.covid19live.com</title>
        <meta
          name="title"
          content="Coronavirus Outbreak in NZ: Latest Map and Case Count"
        />
      </Helmet>

      <div className="Home">

        <TopTitle />
        {/* nz.covid19live.com_ad1 */}
        <GoogleAd client="ca-pub-9859357986849249" slot="3842985080" />
        
        <div className={classnames('home-left', {expanded: expandTable})}>
          <div className="header">
            {/* <Suspense fallback={<div />}>
              <Search />
            </Suspense> */}

            {timeseries && (
              <Suspense fallback={<div style={{minHeight: '56px'}} />}>
                <Actions
                  {...{
                    setDate,
                    dates: Object.keys(timeseries['TT']?.dates).reverse(),
                    date,
                  }}
                />
              </Suspense>
            )}
          </div>

          <div style={{position: 'relative', marginTop: '1rem'}}>
            {data && (
              <Suspense fallback={<div style={{height: '50rem'}} />}>
                {width > 769 && (
                  <MapSwitcher {...{mapStatistic, setMapStatistic}} />
                )}
                <Level data={data['TT']} />
              </Suspense>
            )}

            {timeseries && (
              <Suspense fallback={<div style={{height: '50rem'}} />}>
                <Minigraphs timeseries={timeseries['TT']?.dates} {...{date}} />
              </Suspense>
            )}
          </div>

          {data && (
            <Suspense fallback={<div />}>
              <Table
                {...{
                  data,
                  regionHighlighted,
                  setRegionHighlighted,
                  expandTable,
                  setExpandTable,
                }}
              />
            </Suspense>
          )}
        </div>

        <div
          className={classnames('home-right', {expanded: expandTable})}
          ref={homeRightElement}
        >
          {(isVisible || location.hash) && (
            <React.Fragment>
              {data && (
                <div
                  className={classnames('map-container', {
                    expanded: expandTable,
                  })}
                >
                  <Suspense fallback={<div style={{height: '50rem'}} />}>
                    <StateHeader data={data['TT']} stateCode={'TT'} />
                    <MapExplorer
                      stateCode="TT"
                      {...{data}}
                      {...{mapStatistic, setMapStatistic}}
                      {...{regionHighlighted, setRegionHighlighted}}
                      {...{anchor, setAnchor}}
                      {...{expandTable}}
                    />
                  </Suspense>
                </div>
              )}

              {timeseries && (
                <Suspense fallback={<div />}>
                  <TimeseriesExplorer
                    stateCode="TT"
                    {...{
                      timeseries,
                      date,
                      regionHighlighted,
                      setRegionHighlighted,
                      anchor,
                      setAnchor,
                      expandTable,
                    }}
                  />
                </Suspense>
              )}
            </React.Fragment>
          )}
        </div>
      </div>

      {/* nz.covid19live.com_ad2 */}
      <GoogleAd client="ca-pub-9859357986849249" slot="2856565840" />

      {isVisible && (
        <Suspense fallback={<div />}>
          <Footer />
        </Suspense>
      )}
    </React.Fragment>
  );
}

export default Home;
