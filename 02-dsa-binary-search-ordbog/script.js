"use strict";

let globalArrayOfWords = [];

start();

async function start() {
  console.log("STARTING PROGRAM...");
  await fetchData();
  console.log(globalArrayOfWords.length);

  console.log(binarySearchComp("hestevogns", strcmp));
}

async function fetchData() {
  const response = await fetch("./data/ddo_fullforms_2023-10-11.csv");

  const rawtext = await response.text();

  globalArrayOfWords = rawtext.split("\n").map((line) => {
    const parts = line.split("\t");
    return {
      variant: parts[0],
      headword: parts[1],
      homograph: parts[2],
      partofspeech: parts[3],
      id: parts[4],
    };
  });
}

function binarySearchComp(value, comp) {
  let start = 0;
  let end = globalArrayOfWords.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    const compare = globalArrayOfWords[middle].variant;

    if (comp(value, compare) === 0) {
      return middle;
    } else if (comp(value, compare) === -1) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
}

function strcmp(search, check) {
  return search.localeCompare(check, "da");
}
