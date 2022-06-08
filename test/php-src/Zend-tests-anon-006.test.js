// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/anon/006.phpt
  it("testing anon classes inside namespaces", function () {
    expect(parser.parseCode("<?php\nnamespace lone {\n   $hello = new class{} ;\n}\nnamespace {\n    var_dump ($hello);\n}\n?>")).toMatchSnapshot();
  });
});
