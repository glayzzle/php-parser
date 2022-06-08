// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_005.phpt
  it("ZE2 Late Static Binding stacking static calleds", function () {
    expect(parser.parseCode("<?php\nclass TestA {\n    public static function test() {\n        echo get_class(new static()) . \"\\n\";\n        TestB::test();\n        echo get_class(new static()) . \"\\n\";\n        TestC::test();\n        echo get_class(new static()) . \"\\n\";\n        TestBB::test();\n        echo get_class(new static()) . \"\\n\";\n    }\n}\nclass TestB {\n    public static function test() {\n        echo get_class(new static()) . \"\\n\";\n        TestC::test();\n        echo get_class(new static()) . \"\\n\";\n    }\n}\nclass TestC {\n    public static function test() {\n        echo get_class(new static()) . \"\\n\";\n    }\n}\nclass TestBB extends TestB {\n}\nTestA::test();\n?>")).toMatchSnapshot();
  });
});
