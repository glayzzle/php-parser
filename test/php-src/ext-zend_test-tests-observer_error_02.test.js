// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_error_02.phpt
  it("Observer: End handlers fire after a userland fatal error", function () {
    expect(parser.parseCode("<?php\nfunction foo()\n{\n    trigger_error('Foo error', E_USER_ERROR);\n}\nfoo();\necho 'You should not see this.';\n?>")).toMatchSnapshot();
  });
});
