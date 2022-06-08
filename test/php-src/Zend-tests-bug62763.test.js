// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug62763.phpt
  it("Bug #62763 (register_shutdown_function and extending class)", function () {
    expect(parser.parseCode("<?php\nclass test1 {\n    public function __construct() {\n        register_shutdown_function(array($this, 'shutdown'));\n    }\n    public function shutdown() {\n        exit(__METHOD__);\n    }\n}\nclass test2 extends test1 {\n    public function __destruct() {\n       exit (__METHOD__);\n    }\n}\nnew test1;\nnew test2;\n?>")).toMatchSnapshot();
  });
});
