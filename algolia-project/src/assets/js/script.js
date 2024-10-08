import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';
import { searchBox, hits } from 'instantsearch.js/es/widgets';

 

const searchClient = algoliasearch(
  "S4DA3UQ9TS",
  "64e8c3ef89266fff1719ad8b745d7e03"
);


const search = instantsearch({
  indexName: 'CLOTH',
  searchClient,
});

search.addWidgets([
  searchBox({
    container: "#searchbox"
  }),
  hits({
    container: "#hits"
  }),



]);

search.start();