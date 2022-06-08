// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_retval_05.phpt
  it("Observer: Retvals are observable that are: IS_CV, IS_UNDEF", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    return $i_do_not_exist; // IS_CV && IS_UNDEF\n}\n$res = foo(); // Retval used\nfoo(); // Retval unused\necho 'Done' . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
