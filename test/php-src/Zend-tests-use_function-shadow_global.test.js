// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_function/shadow_global.phpt
  it("shadowing a global function with a local version", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    require 'includes/global_bar.inc';\n    require 'includes/foo_bar.inc';\n}\nnamespace {\n    var_dump(bar());\n}\nnamespace {\n    use function foo\\bar;\n    var_dump(bar());\n    echo \"Done\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
