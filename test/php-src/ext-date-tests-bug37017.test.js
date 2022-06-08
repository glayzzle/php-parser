// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug37017.phpt
  it("Bug #37017 (strtotime fails before 13:00:00 with some time zones identifiers).", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('GMT');\necho strtotime(\"2006-05-12 13:00:01 America/New_York\"), \"\\n\";\necho strtotime(\"2006-05-12 13:00:00 America/New_York\"), \"\\n\";\necho strtotime(\"2006-05-12 12:59:59 America/New_York\"), \"\\n\";\necho strtotime(\"2006-05-12 12:59:59 GMT\"), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
