import React from "react";
import Head from "next/head";
import NavBar from "../../../../components/NavBar";

const Category2 = () => {
  return (
    <div>
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

      <main>
        <NavBar />
      </main>
    </div>
  );
};

export default Category2;
