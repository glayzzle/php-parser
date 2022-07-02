// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70164.phpt
  it("__COMPILER_HALT_OFFSET__ is a \"magic\" constant, which should work if referenced directly, even in a namespace", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    echo __COMPILER_HALT_OFFSET__, \"\\n\";\n    echo \\__COMPILER_HALT_OFFSET__, \"\\n\";\n}\nnamespace Foo {\n    echo __COMPILER_HALT_OFFSET__, \"\\n\";\n    echo \\__COMPILER_HALT_OFFSET__, \"\\n\";\n    echo namespace\\__COMPILER_HALT_OFFSET__, \"\\n\";\n}\n__halt_compiler();\n?>")).toMatchSnapshot();
  });
});
