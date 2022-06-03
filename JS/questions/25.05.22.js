/**
 * Closure
 */

// Q: What is "closure"?
// A: It's the ability to simply jump to the context above and take on a variable, for example.

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    // Q: What would be the output and why?
    // A: Operator "var" have only functions scope
    // console.log('[Closure]', i + i + '' + i) // 5 + 5 + '' + 5 = 10 + '' + 5 = 105
  }, i * 10);
}

/**
 * Context
 */

const name = "Go to Bar";

const myObject = {
  getName: function () {
    var name = "Bar Foo";
    return this.name;
  },
  name: "Foo Bar"
};

const getNameFunc = myObject.getName; // .bind(myObject)

// Q: What would be the output and why?
// Q: What is "strict mode" and how does it affect the result?
// console.log('[Context]', myObject.getName());
// console.log('[Context]', getNameFunc());

/**
 * Bind
 */

// Q: What is "bind"? How does it work?

function plus(x, y) {
  return x + y;
}

Function.prototype.fbind = function (context, ...args) {
  return (...rest) => {
    return this.call(context, ...args.concat(rest));
  }
}

// const plus4 = plus.fbind(null, 4);
// console.log("[Bind]", plus4(4)); // Should return 8

/**
 * Palindrome
 */

const isPalindrome = (x) => {
  const len = x.length;
  const mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    if (x[i] !== x[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

// console.log("[Palindrome]", isPalindrome("level")); // Should return true

/**
 * Run-length encoding
 *
 * Given a string consisting of the letters A-Z:
 * "AABBBCCXYZ"
 * You need to write the RLE function, which will output a string like:
 * "A2B3C2XYZ"
 * (please see "questions.spec.js" for more examples)
 *
 * Explanation:
 * 1. if the symbol occurs 1 time, it remains unchanged
 * 2. if the symbol is repeated more than 1 time, the number of repetitions is added to it
 */

function rle(str) {
  const dictionary = {};
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (dictionary[char] !== undefined) {
      dictionary[char] = dictionary[char] + 1;
    } else {
      dictionary[char] = 1;
    }
  }

  for (const [key, value] of Object.entries(dictionary)) {
    if (value <= 1) {
      result += key;
    } else {
      result += key + value;
    }
  }

  return result;
}

console.log('[RLE]', rle('AABBBCCXYZ')); // Should return A2B3C2XYZ
