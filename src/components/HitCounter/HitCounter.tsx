import React, { useEffect, useState } from 'react';
import { useSetupHitCounter } from './hooks';

interface Props {}

const HitCounter = (props: Props) => {
  const [hitCount, setHitCount] = useState<number>(0);
  const setupHitCounter = useSetupHitCounter();

  useEffect(() => {
    const fetchData = async () => {
      setHitCount(await setupHitCounter());
    };

    fetchData();
  }, [setupHitCounter]);

  return <div>{hitCount}</div>;
};

export default HitCounter;
