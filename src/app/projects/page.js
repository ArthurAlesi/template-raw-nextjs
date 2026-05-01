import styles from "./page.module.css";
import Link from "next/link";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <h1 className={styles.title}>Projects</h1>

      <ul>
        <li><Link href="/projects/1">project 1</Link></li>
        <li><Link href="/projects/2">project 2</Link></li>
        <li><Link href="/projects/3">project 3</Link></li>
      </ul>
    </div>
  );
}