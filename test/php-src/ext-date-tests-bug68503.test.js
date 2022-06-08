// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug68503.phpt
  it("Bug #68503 (date_diff on two dates with timezone set localised returns wrong results)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/London');\necho date_diff(new DateTime(\"2015-02-01\"), new DateTime(\"2015-05-01\"))->format( '%yY %mM %dD' ), \"\\n\";\ndate_default_timezone_set('UTC');\necho date_diff(new DateTime(\"2015-02-01\"), new DateTime(\"2015-05-01\"))->format( '%yY %mM %dD' ), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
