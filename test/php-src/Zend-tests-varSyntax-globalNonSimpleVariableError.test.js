// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/varSyntax/globalNonSimpleVariableError.phpt
  it("Global keyword only accepts simple variables", function () {
    expect(() => parser.parseCode("<?php\nglobal $$foo->bar;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
