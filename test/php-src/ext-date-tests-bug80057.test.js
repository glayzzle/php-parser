// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug80057.phpt
  it("Bug #80057 (DateTimeImmutable::createFromFormat() does not populate time)", function () {
    expect(parser.parseCode("<?php\n$now = new DateTimeImmutable;\n$parsed = DateTimeImmutable::createFromFormat('Y-m-d', '2020-09-04');\n$nowStr = $now->format(\"H:i\");\n$parsedStr = $parsed->format(\"H:i\");\nvar_dump($nowStr == $parsedStr);\n?>")).toMatchSnapshot();
  });
});
