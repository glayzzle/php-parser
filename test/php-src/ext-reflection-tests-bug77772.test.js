// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug77772.phpt
  it("Bug #77772: ReflectionClass::getMethods(null) doesn't work", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $prop;\n    public function method() {}\n}\n$rc = new ReflectionClass(Test::class);\nforeach ($rc->getMethods(null) as $method) {\n    var_dump($method->getName());\n}\nforeach ($rc->getProperties(null) as $prop) {\n    var_dump($prop->getName());\n}\n?>")).toMatchSnapshot();
  });
});
