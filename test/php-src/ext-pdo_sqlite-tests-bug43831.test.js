// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug43831.phpt
  it("Bug #43831 ($this gets mangled when extending PDO with persistent connection)", function () {
    expect(parser.parseCode("<?php\nclass Foo extends PDO {\n    function __construct($dsn) {\n        parent::__construct($dsn, null, null, array(PDO::ATTR_PERSISTENT => true));\n    }\n}\nclass Baz extends PDO {\n    function __construct($dsn) {\n        parent::__construct($dsn, null, null, array(PDO::ATTR_PERSISTENT => true));\n    }\n}\nclass Bar extends Baz {\n    function quux() {\n        echo get_class($this), \"\\n\";\n        $foo = new Foo(\"sqlite::memory:\");\n        echo get_class($this), \"\\n\";\n    }\n}\n$bar = new Bar(\"sqlite::memory:\");\n$bar->quux();\nclass MyPDO extends PDO {}\n$bar = new PDO(\"sqlite::memory:\", null, null, array(PDO::ATTR_PERSISTENT => true));\n$baz = new MyPDO(\"sqlite::memory:\", null, null, array(PDO::ATTR_PERSISTENT => true));\nvar_dump($bar);\nunset($bar);\nvar_dump($baz);\nvar_dump($bar);\n?>")).toMatchSnapshot();
  });
});
