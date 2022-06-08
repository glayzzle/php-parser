// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/destructor_inheritance.phpt
  it("ZE2 The inherited destructor is called", function () {
    expect(parser.parseCode("<?php\nclass base {\n   function __construct() {\n      echo __METHOD__ . \"\\n\";\n   }\n   function __destruct() {\n      echo __METHOD__ . \"\\n\";\n   }\n}\nclass derived extends base {\n}\n$obj = new derived;\nunset($obj);\necho 'Done';\n?>")).toMatchSnapshot();
  });
});
