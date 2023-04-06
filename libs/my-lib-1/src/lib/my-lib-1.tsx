import styles from './my-lib-1.module.css';
import { UiMyLib2 } from '@rspack-storybook-nx/ui/my-lib-2';
/* eslint-disable-next-line */
export interface MyLib1Props {}

export function MyLib1(props: MyLib1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyLib1!</h1>
      <UiMyLib2 />
    </div>
  );
}

export default MyLib1;
