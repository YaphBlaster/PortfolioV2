import React, { useEffect, useState } from 'react';
import firebase from '../../firebase/firebase';
import { HitCount } from 'models/models';

interface Props {}

const HitCounter = (props: Props) => {
  const [hitCount, setHitCount] = useState<number>();
  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('portfolio').get();
      if (data) {
        const drilledData = data.docs.map(
          document => document.data() as HitCount
        );
        console.log('drilledData', drilledData[0].count);
        setHitCount(drilledData[0].count);
      }
    };
    fetchData();
  }, []);

  return <div>{hitCount}</div>;
};

export default HitCounter;
