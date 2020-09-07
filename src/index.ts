import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([4, 342, 3121]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
