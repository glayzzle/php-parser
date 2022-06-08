// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_039.phpt
  it("Repeated assign of a variable to mismatched property type must not succeed", function () {
    expect(parser.parseCode("<?php\nclass A {\n        public int $foo;\n}\nclass B {\n        public A $foo;\n}\n$objs = [new A, new A];\n$v = 1;\nforeach ($objs as $obj) {\n        $obj->foo = $v;\n        $v = new A;\n        $obj = new B;\n        $obj->foo = $v;\n}\nvar_dump($objs);\n?>")).toMatchSnapshot();
  });
});
