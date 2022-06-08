// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug71700.phpt
  it("Bug #71700 (Extra day on diff between begin and end of march 2016)", function () {
    expect(parser.parseCode("<?php\n$date1 = new \\DateTime('2016-03-01');\n$date2 = new \\DateTime('2016-03-31');\n$diff = date_diff($date1, $date2, true);\nvar_dump($diff);\n?>")).toMatchSnapshot();
  });
});
