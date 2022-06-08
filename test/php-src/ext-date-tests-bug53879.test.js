// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug53879.phpt
  it("Bug #53879 (DateTime::createFromFormat() fails to parse cookie expiration date)", function () {
    expect(parser.parseCode("<?php\n$date = DateTime::createFromFormat(DateTime::COOKIE, \"Mon, 21-Jan-2041 15:24:52 GMT\");\nprint_r($date);\n?>")).toMatchSnapshot();
  });
});
