import React, { useEffect, useState } from 'react';
import firebase from '../../firebase/firebase';
import { HitCount } from 'models/models';
import { useFetchHitCount } from './hooks';

interface Props {}

const HitCounter = (props: Props) => {
  const fetchHitCount = useFetchHitCount();
  const [hitCount, setHitCount] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      setHitCount(await fetchHitCount());
    };
    fetchData();
  }, []);

  return <div>{hitCount}</div>;
};

export default HitCounter;
