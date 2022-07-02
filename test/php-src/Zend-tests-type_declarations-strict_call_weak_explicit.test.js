// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/strict_call_weak_explicit.phpt
  it("strict_types=1 code calling explicitly strict_types=0 code", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\n// file that's explicitly weak\nrequire 'strict_call_weak_explicit_2.inc';\n// Will succeed: Function was declared in weak mode, but that does not matter\n// This file uses strict mode, so the call is strict, and float denied for int\nfunction_declared_in_weak_mode(1.0);\n?>")).toMatchSnapshot();
  });
});
