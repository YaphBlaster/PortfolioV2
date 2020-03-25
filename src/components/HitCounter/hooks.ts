import firebase from '../../firebase/firebase';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { HitCount } from 'models/models';

// export function useFetchHitCount() {
//   const dispatch = useDispatch();

//   return useCallback(async () => {
//     const db = firebase.firestore();
//     const data = await db.collection('portfolio').get();
//     if (data) {
//       const drilledData = data.docs.map(
//         document => document.data() as HitCount
//       );
//       return drilledData[0].count;
//     }
//   }, []);
// }

export function useFetchHitCount() {
  const dispatch = useDispatch();

  return useCallback(async () => {
    const db = firebase.firestore();
    const data = await db.collection('portfolio').get();
    const documents = data.docs;
    const hitCountObject = documents[0].data() as HitCount;

    return hitCountObject.count;
  }, []);
}
