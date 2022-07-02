// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/usort_stability.phpt
  it("usort() is stable", function () {
    expect(parser.parseCode("<?php\n$array = range(0, 10000);\nusort($array, function($a, $b) {\n    // Everything is equal!\n    return 0;\n});\nvar_dump($array === range(0, 10000));\n?>")).toMatchSnapshot();
  });
});
