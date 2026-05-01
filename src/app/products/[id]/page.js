import Link from "next/link";
import styles from "./page.module.css";

export default async function ProductPage({ params }) {
    const { id } = await params;

    return (
        <div className={styles.product}>
            <h1>Product {id}</h1>
            <Link href="/products">Voltar</Link>
            <p>This is the product page for ID: {id}</p>
        </div>
    );
}