// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug26320.phpt
  it("Bug #26320 (strtotime handling of XML Schema/ISO 8601 format)", function () {
    expect(parser.parseCode("<?php\n    echo date(\"Y-m-d H:i:s\\n\", strtotime(\"2003-11-19T12:30:42\"));\n    echo date(\"Y-m-d H:i:s\\n\", strtotime(\"2003-11-19T12:30:42Z\"));\n?>")).toMatchSnapshot();
  });
});
