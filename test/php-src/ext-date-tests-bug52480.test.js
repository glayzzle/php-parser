// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug52480.phpt
  it("Bug #52480 (Incorrect difference using DateInterval)", function () {
    expect(parser.parseCode("<?php\n$expectedDiff = (array) new DateInterval('P30D');\n// If the DateInterval object was created by DateTime::diff(), then this is the total\n// number of days between the start and end dates. Otherwise, days will be FALSE.\n// https://secure.php.net/manual/en/class.dateinterval.php\n$expectedDiff['days'] = 30;\nforeach (DateTimeZone::listIdentifiers() as $timezone) {\n    $start = new DateTime('2017-03-01', new DateTimeZone($timezone));\n    $end = new DateTime('2017-03-31', new DateTimeZone($timezone));\n    if ($expectedDiff != (array) $start->diff($end)) {\n        echo \"\\nWrong result for $timezone!\\n\";\n    }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
