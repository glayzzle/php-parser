// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/bug31875.phpt
  it("Bug #31875 get_defined_functions() should not list disabled functions", function () {
    expect(parser.parseCode("<?php\n$disabled_function = 'dl';\n/* exclude_disabled parameters is hardcoded to true */\n$functions = get_defined_functions();\nvar_dump(in_array($disabled_function, $functions['internal']));\n$functions = get_defined_functions(false);\nvar_dump(in_array($disabled_function, $functions['internal']));\n$functions = get_defined_functions(true);\nvar_dump(in_array($disabled_function, $functions['internal']));\n?>")).toMatchSnapshot();
  });
});
