// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/undef_var.phpt
  it("Passing undefined variable to named arg", function () {
    expect(parser.parseCode("<?php\nfunction func1($arg) { var_dump($arg); }\nfunc1(arg: $undef);\nfunc2(arg: $undef);\nfunction func2($arg) { var_dump($arg); }\n?>")).toMatchSnapshot();
  });
});
