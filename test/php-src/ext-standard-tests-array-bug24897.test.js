// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug24897.phpt
  it("Bug #24897 (inconsistent behaviour or shuffle() & array_multisort())", function () {
    expect(parser.parseCode("<?php\n$a = array(1 => 2);\nshuffle($a);\nvar_dump($a);\n$a = array(1 => 2);\narray_multisort($a);\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
