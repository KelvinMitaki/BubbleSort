import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([4, 342, 3121]);
const charactersCollection = new CharactersCollection(
  "kjhKJHKjhkjkjhkjGHSAJKXxxxhghkaahfsjgjhs"
);
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
