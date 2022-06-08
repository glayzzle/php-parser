// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_012.phpt
  it("Closure 012: Undefined lexical variables", function () {
    expect(parser.parseCode("<?php\n$lambda = function () use ($i) {\n    return ++$i;\n};\n$lambda();\n$lambda();\nvar_dump($i);\n$lambda = function () use (&$i) {\n    return ++$i;\n};\n$lambda();\n$lambda();\nvar_dump($i);\n?>")).toMatchSnapshot();
  });
});
