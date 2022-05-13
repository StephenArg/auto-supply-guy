import React, { FC } from "react";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import { getItem, getItems } from "../../utils/api";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { StoreItem } from "../../types/StoreItem";

type ItemPageProps = {
  item: StoreItem;
};

const ItemPage: FC<ItemPageProps> = ({ item }) => {
  return (
    <div>
      <Head>
        <title>Auto Supply Guy - {item.Name}</title>
        <meta
          name="description"
          property="og:description"
          content={item.Description}
        />
        <meta
          property="og:site_name"
          content="Auto Supply Guy | Auto detailing supplies"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`Auto Supply Guy - ${item.Name}`} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <link rel="icon" href="/qlogo.png" />
      </Head>

      <main>
        <NavBar />
        <div>{item.Name}</div>
      </main>
    </div>
  );
};

// type Params = {
//   params: {
//     sku: string;
//   };
// };

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const sku = context.params?.sku as string;
  let { item } = await getItem(sku);

  return {
    props: {
      item: item,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let { items } = await getItems();

  // Get the paths we want to pre-render based on posts
  const paths = items.map((item) => ({
    params: { sku: item.SKU.toString() },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
};

export default ItemPage;
