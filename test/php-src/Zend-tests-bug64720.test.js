// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug64720.phpt
  it("Bug #64720 (SegFault on zend_deactivate)", function () {
    expect(parser.parseCode("<?php\nclass Stat {\n    private static $requests;\n    public static function getInstance() {\n        if (!isset(self::$requests[1])) {\n            self::$requests[1] = new self();\n        }\n        return self::$requests[1];\n    }\n    public function __destruct() {\n        unset(self::$requests[1]);\n    }\n}\nclass Foo {\n    public function __construct() {\n        Stat::getInstance();\n    }\n}\nclass ErrorTest {\n    private $trace;\n    public function __construct() {\n        $this->trace = debug_backtrace(1);\n    }\n}\nclass Bar {\n    public function __destruct() {\n        Stat::getInstance();\n        new ErrorTest();\n    }\n    public function test() {\n        new ErrorTest();\n    }\n}\n$foo = new Foo();\n$bar = new Bar();\n$bar->test();\n?>\nOK")).toMatchSnapshot();
  });
});
