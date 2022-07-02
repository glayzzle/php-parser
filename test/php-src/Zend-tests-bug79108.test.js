// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79108.phpt
  it("Bug #79108: Referencing argument in a function makes it a reference in the stack trace", function () {
    expect(parser.parseCode("<?php\nfunction test(string $val) {\n    $a = &$val;\n    hackingHere();\n    print_r($val);\n}\nfunction hackingHere() {\n    // we're able to modify the $val from here, even though the arg was not a reference\n    debug_backtrace()[1]['args'][0] = 'Modified';\n}\ntest('Original');\n?>")).toMatchSnapshot();
  });
});
