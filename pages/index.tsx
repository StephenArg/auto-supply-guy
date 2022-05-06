import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Auto Supply Guy - Professional Auto Detailing Supplies</title>
        <meta
          name="description"
          property="og:description"
          content="Quality Products For All Your Auto Detailing Needs. Call or Order From Us Today! Compounds | Glazes | Waxes | Ceramic Spray Wax | Temp Tags | Dressings | Soap"
        />
        <meta
          property="og:site_name"
          content="Auto Supply Guy | Auto detailing supplies"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Auto Supply Guy - Professional Auto Detailing Products"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <link rel="icon" href="/qlogo.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles["banner-wrapper"]}>
          <img src="/banner.png" alt="banner" className={styles.image} />
          <section className={styles.section}>
            Quality Detail Supplies for all your auto detailing needs.
            <br />
            CALL OR ORDER TODAY (718) 219-7942
          </section>
        </div>

        <NavBar />

        <section className={styles["welcome-text-section"]}>
          <div className={styles["welcome-text-container"]}>
            <h3>Welcome To Our Auto Detailing Store</h3>
            <p>
              We carry almost everything you will need that is auto related at
              discount prices. We adhere to a strict privacy policy that means
              your information will not be shared, sold, or otherwise
              distributed. We hope you enjoy your stay.
            </p>
          </div>
        </section>

        <section className={styles["supply-examples-container"]}>
          <div className={styles["supply-example"]}>
            <img
              src="/auto-detailing-supplies.jpg"
              alt="auto detailing supplies"
            />
            <h3>Auto Detailing Supplies</h3>
            <ol className={styles.ol}>
              <li>
                <a href="/store/supplies/aerosols">Aerosols</a>
              </li>
              <li>
                <a href="/store/supplies/aerosols">Auto Detailing Products</a>
              </li>
              <li>
                <a href="/store/supplies/clay">Clay Bars</a>
              </li>
            </ol>
            <a href="/store" className={styles["supply-example-a"]}>
              Shop Now
            </a>
          </div>
          <div className={styles["supply-example"]}>
            <img
              src="/auto-detailing-accessories.jpg"
              alt="auto detailing supplies"
            />
            <h3>Auto Detailing Accessories</h3>
            <ol className={styles.ol}>
              <li>
                <a href="/store/supplies/aerosols">Buffing Pads</a>
              </li>
              <li>
                <a href="/store/supplies/aerosols">Bottles & Sprayers</a>
              </li>
              <li>
                <a href="/store/supplies/aerosols">Hand Tools & Power tools</a>
              </li>
            </ol>
            <a href="/store" className={styles["supply-example-a"]}>
              Shop Now
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

// export async function getServerSideProps() {
//   return {
//     props: {
//       what: process.env.WHAT
//     }
//   };
// };

export default Home;
