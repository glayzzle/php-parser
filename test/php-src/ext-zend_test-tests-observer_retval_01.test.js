// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_retval_01.phpt
  it("Observer: Retvals are observable that are: IS_CONST", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    return 'I should be observable'; // IS_CONST\n}\n$res = foo(); // Retval used\nfoo(); // Retval unused\necho 'Done' . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
