// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_parse_error.phpt
  it("Test date_parse() function : error conditions", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing date_parse() : error conditions ***\\n\";\necho \"\\n-- Testing date_parse() function with unexpected characters in \\$date argument --\\n\";\n$invalid_date = \"2OO9-02--27 10:00?00.5\";\nvar_dump( date_parse($invalid_date) );\n?>")).toMatchSnapshot();
  });
});
