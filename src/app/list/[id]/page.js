import Link from "next/link";
import styles from "./page.module.css";

export default async function ProductPage({ params }) {
    const { id } = await params;

    return (
        <div className={styles.item}>
            <h1>Item {id}</h1>
            <Link href="/list">Voltar</Link>
            <p>This is the item page for ID: {id}</p>
        </div>
    );
}