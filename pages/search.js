import Head from "next/head";
import React from "react";

import Response from "../Response";
import Header from "./components/Header";
import {useRouter} from "next/router";
import SearchResults from "./SearchResults";

function Search({ results }) {

  const router=useRouter()
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      {/* header */}
      <Header />
      {/* search results */}
      <SearchResults results={results}/>
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  
  const startIndex =context.query.start || "0"
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());
  // after ssr..pass result to client
  return {
    props: {
      results: data,
    },
  };
}
