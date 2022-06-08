// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug39067.phpt
  it("Bug #39067 (getDeclaringClass() and private properties)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private $x;\n}\nclass B extends A {\n    private $x;\n}\nclass C extends B {\n    private $x;\n}\n$rc = new ReflectionClass('C');\nvar_dump($rc->getProperty('x')->getDeclaringClass()->getName());\n$rc = new ReflectionClass('B');\nvar_dump($rc->getProperty('x')->getDeclaringClass()->getName());\n$rc = new ReflectionClass('A');\nvar_dump($rc->getProperty('x')->getDeclaringClass()->getName());\nclass Test {\n    private $x;\n}\nclass Test2 extends Test {\n    public $x;\n}\n$rc = new ReflectionClass('Test2');\nvar_dump($rc->getProperty('x')->getDeclaringClass()->getName());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
