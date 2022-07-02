// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_010.phpt
  it("010: Accessing internal namespace class", function () {
    expect(parser.parseCode("<?php\nnamespace X;\nuse X as Y;\nclass Foo {\n    const C = \"const ok\\n\";\n    static $var = \"var ok\\n\";\n    function __construct() {\n        echo \"class ok\\n\";\n    }\n    static function bar() {\n        echo \"method ok\\n\";\n    }\n}\nnew Foo();\nnew Y\\Foo();\nnew \\X\\Foo();\nFoo::bar();\nY\\Foo::bar();\n\\X\\Foo::bar();\necho Foo::C;\necho Y\\Foo::C;\necho \\X\\Foo::C;\necho Foo::$var;\necho Y\\Foo::$var;\necho \\X\\Foo::$var;\n?>")).toMatchSnapshot();
  });
});
