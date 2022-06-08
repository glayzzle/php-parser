// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_retval_03.phpt
  it("Observer: Retvals are observable that are: refcounted, IS_CV", function () {
    expect(parser.parseCode("<?php\nclass MyRetval {}\nfunction foo() {\n    $retval = new MyRetval(); // Refcounted\n    return $retval; // IS_CV\n}\n$res = foo(); // Retval used\nfoo(); // Retval unused\necho 'Done' . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
