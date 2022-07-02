// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_010.phpt
  it("redefining constructor (__construct second)", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function test() {\n    }\n    function __construct() {\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
