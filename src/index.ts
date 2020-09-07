import { Sorter } from "./Sorter";

const sorter = new Sorter([9, 24, 5, 456, -1, 2, 3, 4, 342, 3121]);
sorter.sort();
console.log(sorter.collection);
