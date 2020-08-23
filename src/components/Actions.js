import ActionsPanel from './ActionsPanel';
import {API_BARE_URL} from '../constants';

import {fetcher} from '../utils/commonFunctions';

import React, {useState, useEffect, lazy, Suspense} from 'react';
import {useLocalStorage} from 'react-use';
import useSWR from 'swr';

const Updates = lazy(() => import('./Updates'));

const Actions = ({setDate, dates}) => {
  const [showUpdates, setShowUpdates] = useState(false);
  const [newUpdate, setNewUpdate] = useLocalStorage('newUpdate', false);
  const [lastViewedLog, setLastViewedLog] = useLocalStorage('lastViewedLog', 0);
  const [isTimelineMode, setIsTimelineMode] = useState(false);

  const {data: updates} = useSWR(
    `${API_BARE_URL}data/updates.json`,
    fetcher,
    {
      revalidateOnFocus: true,
    }
  );

  useEffect(() => {
    // console.log(updates)
    if (updates !== undefined) {
      // const lastTimestamp = updates.slice().reverse()[0].timestamp * 1000;
      // const lastTimestamp = updates.slice().reverse()[0].date;
      const lastTimestamp = updates[updates.length-1].date;
      // console.log(updates[0])
      // console.log(lastTimestamp)
      if (lastTimestamp !== lastViewedLog){// && lastTimestamp > lastViewedLog) {
        // console.log('setting new update: ', lastTimestamp, lastViewedLog);
        setNewUpdate(true);
        setLastViewedLog(lastTimestamp);
      }
    }
  }, [lastViewedLog, updates, setLastViewedLog, setNewUpdate]);
  
  // console.log(updates, lastViewedLog)
  // if(!lastViewedLog) return <></>
  return (
    <React.Fragment>
      <ActionsPanel
        {...{
          lastViewedLog,
          newUpdate,
          isTimelineMode,
          setIsTimelineMode,
          showUpdates,
          setDate,
          dates,
          setNewUpdate,
          setShowUpdates,
        }}
      />

      {showUpdates && (
        <Suspense fallback={<div />}>
          <Updates {...{updates}} />
        </Suspense>
      )}
    </React.Fragment>
  );
};

const isEqual = (prevProps, currProps) => {
  return true;
};

export default React.memo(Actions, isEqual);
