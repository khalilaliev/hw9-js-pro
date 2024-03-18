"use strict";

/// Level 1 ///

const map = new Map([
  [true, "boolean"],
  [123, "number"],
  ["hello", "string"],
  [Symbol(), "symbol"],
  [[1, 2, 3], "array"],
  [{ name: "Khalil" }, "object"],
  [null, "null"],
  [undefined, "undefined"],
  [123456789n, "bigint"],
]);

map.forEach((value, key) => {
  console.log(key, value);
});

/// --------------------------------------------------------- ///

const obj = Object.fromEntries(map);
console.log("obj:", obj);

/// --------------------------------------------------------- ///

const myObj = {
  name: "Khalil",
  age: 22,
  country: "Switzerland",
};

const map2 = new Map(Object.entries(myObj));
console.log("map2:", map2);

/// Level 2 ///

const mergeArrays = (...arr) => {
  // const concatedArr = [].concat(...arr);
  const concatedArr = arr.flat();
  const uniqueEl = [...new Set(concatedArr)];
  const sortedArr = Array.from(uniqueEl).sort((a, b) => {
    return a - b;
  });
  return sortedArr;
};
console.log(
  "mergeArrays:",
  mergeArrays(
    [12, 2, 1, 2, 2, 3, 5, 65],
    [11, 55, 1, 2, 22, 343, 5, 555, 65],
    [112, 55, 15, 27, 22, 343, 21, 65, 65]
  )
);

// const array = [1, 2, 1, 2, 3, 4, 5, 2, 4, 1, 1, 6];

// const mergeArrays = (arr) => {
//   const mergedArr = arr.filter((item, index) => {
//     return index === arr.indexOf(item);
//   });
//   return mergedArr;
// };
// console.log(mergeArrays(array));

/// Level 3 ///
const array = [
  "материк",
  "мошкара",
  "апельсин",
  "спанієль",
  "мінотавр",
  "ромашка",
  "норматив",
  "метрика",
];

const aclean = (arr) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    const cleanedWords = word.split("").sort().join("");
    map.set(cleanedWords, word);
  }
  return Array.from(map.values());
};

console.log("aclean:", aclean(array));

/// Level 4 ///

const books = {
  fantastic: {
    "Frank Herbert": [
      {
        title: "Dune",
        year: 1965,
      },
      {
        title: "Ace Dune Messiah",
        year: 1969,
      },
      {
        title: "Ace Children of Dune",
        year: 1976,
      },
    ],
    "Stanislaw Lem": [
      {
        title: "Solaris",
        year: 1961,
      },
      {
        title: "Solaris: The Star Diaries of Jonah Tichy",
        year: 1971,
      },
    ],
  },
  novel: {
    Remarque: [
      {
        title: "Three Comrades",
        year: 1936,
      },
      {
        title: "Triumphal arch",
        year: 1942,
      },
    ],
    "George Orwell": [
      {
        title: "1984",
        year: 1949,
      },
      {
        title: "Animal Farm",
        year: 1945,
      },
    ],
  },
  fantasy: {
    "The Lord of the Rings": [
      {
        title: "The Fellowship of the Ring",
        year: 1954,
      },
      {
        title: "The Two Towers",
        year: 1954,
      },
      {
        title: "The Return of the King",
        year: 1955,
      },
    ],
    "Harry Potter": [
      {
        title: "Harry Potter and the Philosopher's Stone",
        year: 1997,
      },
      {
        title: "Harry Potter and the Chamber of Secrets",
        year: 1998,
      },
    ],
  },
};

books[Symbol.iterator] = function () {
  const bookNames = [];
  let i = 0;

  for (const key in this) {
    for (const key2 in this[key]) {
      this[key][key2].forEach((item) => {
        bookNames.push(item.title);
      });
    }
  }

  return {
    next() {
      if (i < bookNames.length) {
        return { value: bookNames[i++], done: false };
      } else {
        return { done: true };
      }
    },
  };
};

for (const iterator of books) {
  console.log(iterator);
}
