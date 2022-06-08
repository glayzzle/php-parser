// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug73942.phpt
  it("Bug #73942: $date->modify('Friday this week') doesn't return a Friday if $date is a Sunday", function () {
    expect(parser.parseCode("<?php\n$date1 = \"2017-01-08\"; // this is a Sunday\n$date = new \\DateTime($date1);\n$date->modify('Friday this week');\n$dateFormat = $date->format('Y-m-d');\necho $dateFormat, \"\\n\";\n?>")).toMatchSnapshot();
  });
});
