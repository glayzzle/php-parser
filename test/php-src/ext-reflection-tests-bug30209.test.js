// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug30209.phpt
  it("Reflection Bug #30209 (ReflectionClass::getMethod() lowercases attribute)", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    private $name = 'testBAR';\n    public function testBAR()\n    {\n        try\n        {\n            $class  = new ReflectionClass($this);\n            var_dump($this->name);\n            $method = $class->getMethod($this->name);\n            var_dump($this->name);\n        }\n        catch (Exception $e) {}\n    }\n}\n$foo = new Foo;\n$foo->testBAR();\n?>")).toMatchSnapshot();
  });
});
