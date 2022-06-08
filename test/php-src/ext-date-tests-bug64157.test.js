// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug64157.phpt
  it("Test for bug #64157: DateTime::createFromFormat() reports confusing error message", function () {
    expect(parser.parseCode("<?php\nDateTime::createFromFormat('s', '0');\n$lastErrors = DateTime::getLastErrors();\nprint_r($lastErrors['errors'][0]);\n?>")).toMatchSnapshot();
  });
});
