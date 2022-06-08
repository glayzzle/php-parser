// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_retval_04.phpt
  it("Observer: Retvals are observable that are: refcounted, IS_VAR", function () {
    expect(parser.parseCode("<?php\nclass MyRetval {}\nfunction getObj() {\n    return new MyRetval(); // Refcounted\n}\nfunction foo() {\n    return getObj(); // IS_VAR\n}\n$res = foo(); // Retval used\nfoo(); // Retval unused\nfunction bar($what) {\n  return 'This gets ' . $what . ' in the return handler when unused'; // Refcounted + IS_VAR\n}\n$res = bar('freed'); // Retval used\nbar('freed'); // Retval unused\necho 'Done' . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
