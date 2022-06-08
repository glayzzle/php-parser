// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_retval_07.phpt
  it("Observer: Retvals are observable that are: IS_REFERENCE, IS_VAR", function () {
    expect(parser.parseCode("<?php\nfunction &getMessage() {\n    $retval = 'I should be observable';\n    return $retval;\n}\nfunction foo() {\n    return getMessage(); // IS_REFERENCE + IS_VAR\n}\n$res = foo(); // Retval used\nfoo(); // Retval unused\necho 'Done' . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
