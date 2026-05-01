import styles from "./page.module.css";
import Link from "next/link";

export default function Products() {
  return (
    <div className={styles.products}>
      <h1 className={styles.title}>Products</h1>

      <ul>
        <li><Link href="/products/1">Product 1</Link></li>
        <li><Link href="/products/2">Product 2</Link></li>
        <li><Link href="/products/3">Product 3</Link></li>
      </ul>
    </div>
  );
}