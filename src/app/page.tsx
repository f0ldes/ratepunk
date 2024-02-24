import Image from "next/image";
import mainStyles from "./styles/Main.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import LinkSection from "./components/Links";

export default function Home() {
  return (
    <>
      <main className={mainStyles.main}>
        <Header />
        <MainContent  />
        <LinkSection />
        <Footer />
      </main>
    </>
  );
};
