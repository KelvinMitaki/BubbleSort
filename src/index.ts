import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([
  9,
  24,
  5,
  456,
  -1,
  2,
  3,
  4,
  342,
  3121
]);

const charactersCollection = new CharactersCollection(
  "kjhKJHKjhkjkjhkjGHSAJKXxxxhghkaahfsjgjhs"
);

const linkedList = new LinkedList();

linkedList.add(-2);
linkedList.add(50);
linkedList.add(73);
linkedList.add(508);
linkedList.sort();
charactersCollection.sort();
numbersCollection.sort();
console.log(linkedList.print());
console.log(charactersCollection.data);
console.log(numbersCollection.data);
