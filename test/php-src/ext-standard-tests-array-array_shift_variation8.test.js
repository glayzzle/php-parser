// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_shift_variation8.phpt
  it("Test array_shift() function : usage variations - maintaining referenced elements", function () {
    expect(parser.parseCode("<?php\n/*\n * From a comment left by Traps on 09-Jul-2007 on the array_shift documentation page:\n * For those that may be trying to use array_shift() with an array containing references\n * (e.g. working with linked node trees), beware that array_shift() may not work as you expect:\n * it will return a *copy* of the first element of the array,\n * and not the element itself, so your reference will be lost.\n * The solution is to reference the first element before removing it with array_shift():\n */\necho \"*** Testing array_shift() : usage variations ***\\n\";\n// using only array_shift:\necho \"\\n-- Reference result of array_shift: --\\n\";\n$a = 1;\n$array = array(&$a);\n$b =& array_shift($array);\n$b = 2;\necho \"a = $a, b = $b\\n\";\n// solution: referencing the first element first:\necho \"\\n-- Reference first element before array_shift: --\\n\";\n$a = 1;\n$array = array(&$a);\n$b =& $array[0];\narray_shift($array);\n$b = 2;\necho \"a = $a, b = $b\\n\";\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
