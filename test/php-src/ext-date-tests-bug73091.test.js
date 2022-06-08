// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug73091.phpt
  it("Bug #73091 (Unserializing DateInterval object may lead to __toString invocation)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    function __toString() {\n        var_dump(0);\n        return 'may be a bug';\n    }\n}\nvar_dump(unserialize('O:12:\"DateInterval\":1:{s:4:\"days\";O:3:\"foo\":0:{}}'));\n?>")).toMatchSnapshot();
  });
});
