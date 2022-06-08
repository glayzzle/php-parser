// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_error_01.phpt
  it("Observer: End handlers fire after a fatal error", function () {
    expect(parser.parseCode("<?php\nfunction foo()\n{\n    str_repeat('.', 1024 * 1024 * 2); // 2MB\n}\nfoo();\necho 'You should not see this.';\n?>")).toMatchSnapshot();
  });
});
