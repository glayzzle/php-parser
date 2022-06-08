// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug61967.phpt
  it("Bug #61967: unset array item in array_walk_recursive cause inconsistent array", function () {
    expect(parser.parseCode("<?php\n$arr = array(\n    range(1, 5),\n    range(1, 5),\n    range(1, 5),\n    range(1, 5),\n    range(1, 5),\n);\narray_walk_recursive($arr,\n    function (&$value, $key) use(&$arr) {\n        var_dump($key);\n        unset($arr[$key]);\n    }\n);\n?>")).toMatchSnapshot();
  });
});
