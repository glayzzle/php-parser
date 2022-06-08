// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/weak_call_strict.phpt
  it("strict_types=0 code calling strict_types=1 code", function () {
    expect(parser.parseCode("<?php\n// implicitly strict_types=0\n// file with strict_types=1\nrequire 'weak_call_strict_2.inc';\n// Will succeed: Function was declared in strict mode, but that does not matter\n// This file uses weak mode, so the call is weak, and float accepted for int\nfunction_declared_in_strict_mode(1.0);\n?>")).toMatchSnapshot();
  });
});
