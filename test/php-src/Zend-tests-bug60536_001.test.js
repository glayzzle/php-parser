// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60536_001.phpt
  it("Bug #60536 (Traits Segfault)", function () {
    expect(parser.parseCode("<?php\ntrait T { private $x = 0; }\nclass X {\n    use T;\n}\nclass Y extends X {\n      use T;\n      function __construct() {\n          return ++$this->x;\n      }\n}\nclass Z extends Y {\n      function __construct() {\n          return ++$this->x;\n      }\n}\n$a = new Z();\n$a->__construct();\necho \"DONE\";\n?>")).toMatchSnapshot();
  });
});
