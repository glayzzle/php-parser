// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug29585.phpt
  it("Bug #29585 (Support week numbers in strtotime())", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"GMT\");\necho gmdate(\"Y-m-d H:i:s\", strtotime(\"2004W30\"));\n?>")).toMatchSnapshot();
  });
});
