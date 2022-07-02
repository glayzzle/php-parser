// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants/dir-constant-eval.phpt
  it("__DIR__ constant used with eval()", function () {
    expect(parser.parseCode("<?php\neval('echo __DIR__ . \"\\n\";');\n?>")).toMatchSnapshot();
  });
});
