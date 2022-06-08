// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_retval_by_ref_03.phpt
  it("Observer: Retvals by reference are observable that are: IS_VAR, ZEND_RETURNS_FUNCTION", function () {
    expect(parser.parseCode("<?php\nfunction getMessage() {\n  return 'I should be observable';\n}\nfunction &foo() {\n    return getMessage(); // IS_VAR + ZEND_RETURNS_FUNCTION\n}\n$res = foo(); // Retval used\nfoo(); // Retval unused\necho 'Done' . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
