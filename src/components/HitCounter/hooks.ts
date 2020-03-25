import firebase from '../../firebase/firebase';
import { useCallback } from 'react';
import { HitCount } from 'models/models';
import { useDispatch, useSelector } from 'react-redux';
import { hasVisitedSelector, setHasVisited } from 'containers/Home/ducks';

export const useSetupHitCounter = () => {
  const dispatch = useDispatch();
  const hasVisited = useSelector(hasVisitedSelector);
  const db = firebase.firestore();

  return useCallback(async () => {
    const collection = await db.collection('portfolio');
    const documents = (await collection.get()).docs;
    const { count } = documents[0].data() as HitCount;

    if (!hasVisited) {
      await collection.doc('hitCounter').set({ count: count + 1 });
      dispatch(setHasVisited());
      return count + 1;
    }

    return count;
  }, [hasVisited, db, dispatch]);
};
