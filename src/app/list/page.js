import styles from "./list.module.css";
import Link from "next/link";

export default function List() {
  return (
    <div className={styles.list}>
      <h1 className={styles.title}>List</h1>

      <ul>
        <li><Link href="/list/1">item 1</Link></li>
        <li><Link href="/list/2">item 2</Link></li>
        <li><Link href="/list/3">item 3</Link></li>
      </ul>
    </div>
  );
}