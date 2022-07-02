// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dereference_014.phpt
  it("Trying to create an object from dereferencing uninitialized variable", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nclass foo {\n    public $x;\n    static public $y;\n    public function a() {\n        return $this->x;\n    }\n    static public function b() {\n        return self::$y;\n    }\n}\n$foo = new foo;\n$h = $foo->a()[0]->a;\nvar_dump($h);\n$h = foo::b()[1]->b;\nvar_dump($h);\n?>")).toMatchSnapshot();
  });
});
