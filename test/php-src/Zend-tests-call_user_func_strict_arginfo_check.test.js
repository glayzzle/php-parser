// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_user_func_strict_arginfo_check.phpt
  it("Arginfo / zpp consistency check for call_user_func() in strict context", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nnamespace Foo;\n// strlen() will be called with strict_types=0, so this is legal.\nvar_dump(call_user_func('strlen', false));\n?>")).toMatchSnapshot();
  });
});
