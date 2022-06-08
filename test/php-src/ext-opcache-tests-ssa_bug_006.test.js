// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/ssa_bug_006.phpt
  it("Incorrect optimization of $i = $i++", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $i = 1;\n    $i = $i++;\n    var_dump($i);\n    $i = 1;\n    $i = $i--;\n    var_dump($i);\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
