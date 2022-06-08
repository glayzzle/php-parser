// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug38217.phpt
  it("Bug #38217 (ReflectionClass::newInstanceArgs() tries to allocate too much memory)", function () {
    expect(parser.parseCode("<?php\nclass ObjectOne {\n    public function __construct() {\n    }\n}\n$class= new ReflectionClass('ObjectOne');\nvar_dump($class->newInstanceArgs());\nclass ObjectTwo {\n    public function __construct($var) {\n        var_dump($var);\n    }\n}\n$class= new ReflectionClass('ObjectTwo');\ntry {\n    var_dump($class->newInstanceArgs());\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\nvar_dump($class->newInstanceArgs(array('test')));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
