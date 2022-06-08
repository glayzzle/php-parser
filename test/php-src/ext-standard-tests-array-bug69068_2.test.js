// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug69068_2.phpt
  it("Bug #69068: Exchanging array during array_walk -> memory errors (variation)", function () {
    expect(parser.parseCode("<?php\n$array = [1, 2, 3];\n$array2 = [4, 5];\narray_walk($array, function(&$value, $key) use ($array2) {\n    var_dump($value);\n    if ($value == 2) {\n        $GLOBALS['array'] = $array2;\n    }\n    $value *= 10;\n});\nvar_dump($array, $array2);\n?>")).toMatchSnapshot();
  });
});
