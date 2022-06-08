// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug68652.phpt
  it("Bug #68652 (segmentation fault in destructor)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    private static $instance;\n    public static function getInstance() {\n        if (isset(self::$instance)) {\n            return self::$instance;\n        }\n        return self::$instance = new self();\n    }\n    public function __destruct() {\n        Bar::getInstance();\n    }\n}\nclass Bar {\n    private static $instance;\n    public static function getInstance() {\n        if (isset(self::$instance)) {\n            return self::$instance;\n        }\n        return self::$instance = new self();\n    }\n    public function __destruct() {\n        if (!isset(self::$instance)) return;\n        Foo::getInstance();\n    }\n}\n$foo = new Foo();\n?>\nOK")).toMatchSnapshot();
  });
});
