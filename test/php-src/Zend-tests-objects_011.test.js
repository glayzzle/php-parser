// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_011.phpt
  it("redefining constructor (__construct first)", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function __construct() {\n    }\n    function test() {\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
