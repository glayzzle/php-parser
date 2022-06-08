// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_016.phpt
  it("ZE2 Late Static Binding within hooks/magic methods", function () {
    expect(parser.parseCode("<?php\nclass TestChild extends TestParent {\n    public static function who() {\n        echo __CLASS__.\"\\n\";\n    }\n}\nclass TestParent {\n    public function __get($var) {\n        static::who();\n    }\n    public function __set($var, $val) {\n        static::who();\n    }\n    public function __call($name, $args) {\n        static::who();\n    }\n    public static function who() {\n        echo __CLASS__.\"\\n\";\n    }\n}\n$o = new TestChild;\n$o->test();\n$o->a = \"b\";\necho $o->a;\n?>")).toMatchSnapshot();
  });
});
