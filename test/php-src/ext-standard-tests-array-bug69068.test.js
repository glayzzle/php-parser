// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug69068.phpt
  it("Bug #69068: Exchanging array during array_walk -> memory errors", function () {
    expect(parser.parseCode("<?php\n$array = [1, 2, 3];\narray_walk($array, function($value, $key) {\n    var_dump($value);\n    if ($value == 2) {\n        $GLOBALS['array'] = [4, 5];\n    }\n});\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
