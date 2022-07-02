// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/defaults.phpt
  it("Skipping over default parameters", function () {
    expect(parser.parseCode("<?php\nfunction test1($a = 'a', $b = 'b') {\n    echo \"a: $a, b: $b\\n\";\n}\nfunction test2($a = SOME_CONST, $b = 'b') {\n    echo \"a: $a, b: $b\\n\";\n}\nfunction test3($a = SOME_OTHER_CONST, $b = 'b') {\n    echo \"a: $a, b: $b\\n\";\n}\ntest1(b: 'B');\ndefine('SOME_CONST', 'X');\ntest2(b: 'B');\n// NB: We also want to test the stack trace.\ntest3(b: 'B');\n?>")).toMatchSnapshot();
  });
});
