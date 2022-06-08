// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/varSyntax/newVariable.phpt
  it("Variable as class name for new expression", function () {
    expect(parser.parseCode("<?php\n$className = 'stdClass';\n$array = ['className' => 'stdClass'];\n$obj = (object) ['className' => 'stdClass'];\nclass Test {\n    public static $className = 'stdClass';\n}\n$test = 'Test';\n$weird = [0 => (object) ['foo' => 'Test']];\nvar_dump(new $className);\nvar_dump(new $array['className']);\nvar_dump(new $obj->className);\nvar_dump(new Test::$className);\nvar_dump(new $test::$className);\nvar_dump(new $weird[0]->foo::$className);\n?>")).toMatchSnapshot();
  });
});
