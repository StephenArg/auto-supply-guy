import React, { FC } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import type { StoreItem } from "../../types/StoreItem";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import { getItems } from "../../utils/api";
import StoreContainer from "../../components/StoreContainer";

type StoreProps = {
  items: StoreItem[];
};

const Store: FC<StoreProps> = ({ items }) => {
  // const categories = items.reduce((set, item) => {
  //   const splitCategories: string[] = item?.Categories?.split(" > ") || [""];
  //   splitCategories
  // }, {})
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
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
          <h2>All Products</h2>
        </div>
        <StoreContainer items={items} />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let { items } = await getItems();

  return {
    props: {
      items: items,
    },
  };
};

export default Store;
