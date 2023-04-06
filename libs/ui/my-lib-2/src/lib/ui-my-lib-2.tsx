import styles from './ui-my-lib-2.module.css';

/* eslint-disable-next-line */
export interface UiMyLib2Props {}

export function UiMyLib2(props: UiMyLib2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiMyLib2!</h1>
    </div>
  );
}

export default UiMyLib2;
