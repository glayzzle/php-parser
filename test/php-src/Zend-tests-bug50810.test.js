// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug50810.phpt
  it("Bug #50810 (property_exists does not work for private)", function () {
    expect(parser.parseCode("<?php\nclass ExampleSuperClass\n{\n    private $foo;\n    static protected $bar;\n    private function foo()\n    {\n    }\n    public function propertyFooExists()\n    {\n        return property_exists($this, 'foo');\n    }\n}\nclass ExampleSubClass extends ExampleSuperClass\n{\n    public function methodExists()\n    {\n        return method_exists($this, 'foo');\n    }\n    public function propertyBarExists()\n    {\n        return property_exists($this, 'bar');\n    }\n}\n$example = new ExampleSubClass();\nvar_dump($example->methodExists());\nvar_dump(method_exists($example, 'propertyFooExists'));\nvar_dump($example->propertyFooExists());\nvar_dump($example->propertyBarExists());\n?>")).toMatchSnapshot();
  });
});
