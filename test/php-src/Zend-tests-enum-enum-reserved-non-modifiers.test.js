// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/enum-reserved-non-modifiers.phpt
  it("enum keyword is reserved_non_modifiers", function () {
    expect(parser.parseCode("<?php\nnamespace enum {\n    class Foo {\n        public static function bar() {\n            return 'enum\\Foo::bar()';\n        }\n    }\n}\nnamespace {\n    class Foo {\n        const enum = 'enum const';\n        public static function enum() {\n            return 'enum static method';\n        }\n    }\n    echo \\enum\\Foo::bar() . \"\\n\";\n    echo Foo::enum . \"\\n\";\n    echo Foo::enum() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
