// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug48224.phpt
  it("Bug #48224 (array_rand no longer shuffles)", function () {
    expect(parser.parseCode("<?php\n$a = range(0, 100);\n$a1 = array_rand($a, count($a));\n$a2 = array_rand($a, count($a));\n$a3 = array_rand($a, count($a));\n$a4 = array_rand($a, count($a));\nvar_dump($a1 === $a2 && $a1 === $a3 && $a1 === $a4);\n?>")).toMatchSnapshot();
  });
});
