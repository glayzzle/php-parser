// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_023.phpt
  it("Late Static Binding static:: calls protected / public method of child class even then\nthe method is private in parent class", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public static function out() {\n        echo static::value(), PHP_EOL;\n    }\n    private static function value() { return 'A'; }\n}\nclass B extends A {\n    protected static function value() { return 'B'; }\n}\nclass C extends A {\n    public static function value() { return 'C'; }\n}\nA::out();\nB::out();\nC::out();\necho PHP_EOL;")).toMatchSnapshot();
  });
});
