import Post from './Post';

import "./styles/style";

import xml from './assets/xml/note';

import json from './assets/json/json';

import csv from './assets/csv/email';

console.log("json: ", json);
console.log("xml: ", xml);
console.log("csv: ", csv);

const post = new Post("Narek", "image")

console.log(post.toSting());