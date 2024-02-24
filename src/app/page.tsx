import Image from "next/image";
import styles from './styles/Main.module.scss';
import Header from "./components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <p>
        This is it, man!
      </p>
    </main>
  );
}
