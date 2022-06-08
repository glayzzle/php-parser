// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_010.phpt
  it("ZE2 Late Static Binding using static:: in functions called by non execute() calls and constructors.", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    protected static $className = 'Foo';\n    public static function bar() {\n        echo static::$className . \"::bar\\n\";\n    }\n    public function __construct() {\n        echo static::$className . \"::__construct\\n\";\n    }\n    public function __destruct() {\n        echo static::$className . \"::__destruct\\n\";\n    }\n}\nclass FooChild extends Foo {\n    protected static $className = 'FooChild';\n}\nregister_shutdown_function(array('Foo', 'bar'));\nregister_shutdown_function(array('FooChild', 'bar'));\n$foo = new Foo();\n$fooChild = new FooChild();\nunset($foo);\nunset($fooChild);\n?>")).toMatchSnapshot();
  });
});
