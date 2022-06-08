// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/singleton_001.phpt
  it("ZE2 singleton", function () {
    expect(parser.parseCode("<?php\nclass Counter {\n    private $counter = 0;\n    function increment_and_print() {\n        echo ++$this->counter;\n        echo \"\\n\";\n    }\n}\nclass SingletonCounter {\n    private static $m_instance = NULL;\n    static function Instance() {\n        if (self::$m_instance == NULL) {\n            self::$m_instance = new Counter();\n        }\n        return self::$m_instance;\n    }\n}\nSingletonCounter::Instance()->increment_and_print();\nSingletonCounter::Instance()->increment_and_print();\nSingletonCounter::Instance()->increment_and_print();\n?>")).toMatchSnapshot();
  });
});
