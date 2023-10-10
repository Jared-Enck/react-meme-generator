'use client';
import styles from './page.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMeme } from '../redux/features/memeListSlice';
import MemeForm from './components/MemeForm';
import MemeCard from './components/MemeCard';

export default function Home() {
  const memeList = useSelector((store) => store.rootReducer.memeList);
  const dispatch = useDispatch();
  const handleDelete = (idx) => {
    dispatch(deleteMeme(idx));
  };
  return (
    <main className={styles.main}>
      <h1>much dank so meme</h1>
      <div>
        <MemeForm />
      </div>
      {memeList.length ? (
        <ul className={styles.list}>
          {memeList.map((m, idx) => (
            <li key={idx}>
              <MemeCard meme={m} />
              <button onClick={() => handleDelete(idx)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : null}
    </main>
  );
}
