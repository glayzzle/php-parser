// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_024.phpt
  it("Late Static Binding static:: accesses protected / public static variables of child \nclass when the variable is private in parent class", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private static $value = 'A';\n    public static function out() {\n        echo static::$value, PHP_EOL;\n    }\n}\nclass B extends A {\n    protected static $value = 'B';\n}\nclass C extends A {\n    public static $value = 'C';\n}\nA::out();\nB::out();\nC::out();")).toMatchSnapshot();
  });
});
