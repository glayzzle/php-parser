// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug72174.phpt
  it("Bug #72174: ReflectionProperty#getValue() causes __isset call", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    private $bar;\n    public function __construct()\n    {\n        unset($this->bar);\n    }\n    public function __isset($name)\n    {\n        var_dump(__METHOD__);\n        return true;\n    }\n    public function __get($name)\n    {\n        var_dump(__METHOD__);\n        return $name;\n    }\n}\n$instance = new Foo();\n$reflectionBar = (new ReflectionProperty(Foo::class, 'bar'));\nvar_dump($reflectionBar->getValue($instance));\n?>")).toMatchSnapshot();
  });
});
