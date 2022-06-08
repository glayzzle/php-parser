// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/anon/007.phpt
  it("testing anon classes in functions outside of classes in namespaces", function () {
    expect(parser.parseCode("<?php\nnamespace lone {\n    function my_factory() {\n        return new class{};\n    }\n    class Outer {\n        public function __construct() {\n             var_dump(\n                my_factory());\n        }\n    }\n    new Outer();\n}\n?>")).toMatchSnapshot();
  });
});
