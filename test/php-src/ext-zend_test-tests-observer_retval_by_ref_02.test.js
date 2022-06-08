// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_retval_by_ref_02.phpt
  it("Observer: Retvals by reference are observable that are: IS_TMP_VAR", function () {
    expect(parser.parseCode("<?php\nfunction &foo() {\n    $retval = 'I should be ';\n    return $retval . 'observable'; // IS_TMP_VAR\n}\n$res = foo(); // Retval used\nfoo(); // Retval unused\necho 'Done' . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
