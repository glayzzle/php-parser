// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug75290.phpt
  it("Bug #75290 (debug info of Closures of internal functions contain garbage argument names)", function () {
    expect(parser.parseCode("<?php\nvar_dump((new ReflectionFunction('sin'))->getClosure());\nvar_dump(function ($someThing) {});\n?>")).toMatchSnapshot();
  });
});
