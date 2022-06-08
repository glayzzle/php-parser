// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug52063.phpt
  it("Bug #52063 (DateTime constructor's second argument doesn't have a null default value)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"Europe/Lisbon\");\n$a = new DateTime(\"2009-01-01\", null);\necho $a->format(DateTime::COOKIE);\necho \"\\n\";\n$a = date_create(\"2009-01-01\", null);\necho $a->format(DateTime::COOKIE);\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
