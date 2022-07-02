// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/int_conversion_exponents.phpt
  it("Integer conversion from scientific notation", function () {
    expect(parser.parseCode("<?php\nvar_dump((int)\"1.2345e9\");\nvar_dump((int)\"-1.2345e9\");\nvar_dump(intval(\"1.2345e9\"));\nvar_dump(intval(\"-1.2345e9\"));\nvar_dump(\"1.2345e9\" % PHP_INT_MAX);\nvar_dump(\"-1.2345e9\" % PHP_INT_MIN);\nvar_dump(\"1.2345e9\" | 0);\nvar_dump(\"-1.2345e9\" | 0);\necho PHP_EOL;\nvar_dump((int)\" 1.2345e9  abc\");\nvar_dump((int)\" -1.2345e9  abc\");\nvar_dump(intval(\" 1.2345e9  abc\"));\nvar_dump(intval(\" -1.2345e9  abc\"));\nvar_dump(\" 1.2345e9  abc\" % PHP_INT_MAX);\nvar_dump(\" -1.2345e9  abc\" % PHP_INT_MIN);\nvar_dump(\" 1.2345e9  abc\" | 0);\nvar_dump(\" -1.2345e9  abc\" | 0);\n?>")).toMatchSnapshot();
  });
});
