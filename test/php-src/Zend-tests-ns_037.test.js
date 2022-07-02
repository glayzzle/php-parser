// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_037.phpt
  it("037: Name ambiguity (namespace name or namespace's class name)", function () {
    expect(parser.parseCode("<?php\nnamespace X;\nuse X as Y;\nclass X {\n    const C = \"const ok\\n\";\n    static $var = \"var ok\\n\";\n    function __construct() {\n        echo \"class ok\\n\";\n    }\n    static function bar() {\n        echo \"method ok\\n\";\n    }\n}\nnew X();\nnew Y\\X();\nnew \\X\\X();\nX::bar();\nY\\X::bar();\n\\X\\X::bar();\necho X::C;\necho Y\\X::C;\necho \\X\\X::C;\necho X::$var;\necho Y\\X::$var;\necho \\X\\X::$var;\n?>")).toMatchSnapshot();
  });
});
