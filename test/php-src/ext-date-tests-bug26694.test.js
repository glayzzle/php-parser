// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug26694.phpt
  it("Bug #26694 (strtotime() request for \"Sun, 21 Dec 2003 20:38:33 +0000 GMT\")", function () {
    expect(parser.parseCode("<?php\n    echo gmdate(\"Y-m-d H:i:s\", strtotime(\"Sun, 21 Dec 2003 20:38:33 +0000 GMT\"));\n?>")).toMatchSnapshot();
  });
});
