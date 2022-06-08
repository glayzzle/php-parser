// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug34045.phpt
  it("Bug #34045 (Buffer overflow with serialized object)", function () {
    expect(parser.parseCode("<?php\nclass BasicSingleton\n{\n    private static $instance;\n    public function __wakeup() {\n        self::$instance = $this;\n    }\n    public static function singleton() {\n        if (!(self::$instance instanceof BasicSingleton)) {\n            $c = __CLASS__;\n            self::$instance = new $c;\n        }\n        return self::$instance;\n    }\n}\n$db = BasicSingleton::singleton();\n$db_str = serialize($db);\n$db2 = unserialize($db_str);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
