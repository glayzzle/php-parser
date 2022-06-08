// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_037.phpt
  it("Crash when calling a method of a class that inherits PDOStatement", function () {
    expect(parser.parseCode("<?php\nclass MyStatement extends PDOStatement\n{\n}\n$obj = new MyStatement;\nvar_dump($obj->foo());\n?>")).toMatchSnapshot();
  });
});
