// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_fix_createFromFormat.phpt
  it("Test fix for DateTime when date have textual day with dot or other special char at end", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set('Europe/London');\necho \"*** Testing clone on DateTime objects ***\\n\";\n// Create a DateTime object..\n$orig = new DateTime('2012-11-29 17:00:00');\n// String to parse\n$string = \"Thu., Nov. 29, 2012 5:00PM\";\n// Create a DateTime object from format\n$fromFormat = DateTime::createFromFormat( \"D., M# j, Y g:iA\", $string );\necho \"Format method: \" . $orig->format(\"D., M. j, Y g:iA\") . \"\\n\";\necho \"createFromFormat method: \" . $fromFormat->format(\"D., M. j, Y g:iA\") . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
