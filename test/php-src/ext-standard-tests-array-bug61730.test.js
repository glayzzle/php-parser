// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug61730.phpt
  it("Bug #61730 (Segfault from array_walk modifying an array passed by reference)", function () {
    expect(parser.parseCode("<?php\n$myArray = array_fill(0, 10, 1);\narray_walk(\n    $myArray,\n    function($value, $key) use ($myArray)\n    {\n        reset($myArray);\n    }\n);\narray_walk(\n    $myArray,\n    function($value, $key) use (&$myArray)\n    {\n        var_dump($key);\n        unset($myArray[$key]);\n        unset($myArray[$key+1]);\n        unset($myArray[$key+2]);\n    }\n);\nprint_r($myArray);\n?>")).toMatchSnapshot();
  });
});
