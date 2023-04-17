import styles from './custom.module.css';

export const attachClass = (element: Element) => {
  element.classList.add(styles.me);
};
