// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug79683.phpt
  it("Bug #79683: Fake reflection scope affects __toString()", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    private string $prop1 = '123';\n    public function __toString()\n    {\n        return $this->prop1;\n    }\n}\nclass B\n{\n    private string $prop2;\n}\n$b = new B();\n$reflector = new ReflectionClass($b);\n$property = $reflector->getProperty('prop2');\n$property->setAccessible(true);\n$property->setValue($b, new A());\nvar_dump($b);\n?>")).toMatchSnapshot();
  });
});
