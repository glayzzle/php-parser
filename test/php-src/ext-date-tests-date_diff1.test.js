// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_diff1.phpt
  it("Test for date_diff with timezone abbreviations.", function () {
    expect(parser.parseCode("<?php\n$start = new DateTime('2010-10-04 02:18:48 EDT');\n$end   = new DateTime('2010-11-06 18:38:28 EDT');\n$int = $start->diff($end);\nvar_dump($start);\nvar_dump($end);\nvar_dump($int);\n?>")).toMatchSnapshot();
  });
});
