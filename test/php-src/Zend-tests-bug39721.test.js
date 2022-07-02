// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug39721.phpt
  it("Bug #39721 (Runtime inheritance causes data corruption)", function () {
    expect(parser.parseCode("<?php\nclass test2 {\n    private static $instances = 0;\n    public $instance;\n    public function __construct() {\n        $this->instance = ++self::$instances;\n    }\n}\n$foo = new test2();\nif (is_object($foo)) {\n    class test2_child extends test2 {\n    }\n}\n$child = new test2_child();\necho $foo->instance . \"\\n\";\necho $child->instance . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
