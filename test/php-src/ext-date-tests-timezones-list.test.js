// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/timezones-list.phpt
  it("timezone_identifiers_list()", function () {
    expect(parser.parseCode("<?php\n$a = timezone_identifiers_list();\n$b = timezone_identifiers_list( DateTimezone::AMERICA );\n$c = timezone_identifiers_list( DateTimezone::ALL_WITH_BC );\n$d = timezone_identifiers_list( DateTimezone::EUROPE | DateTimezone::UTC );\necho in_array( \"Europe/Oslo\", $a ) ? \"found\" : \"notfound\", \"\\n\";\necho in_array( \"Europe/Oslo\", $b ) ? \"found\" : \"notfound\", \"\\n\";\necho in_array( \"Europe/Oslo\", $c ) ? \"found\" : \"notfound\", \"\\n\";\necho in_array( \"Europe/Oslo\", $d ) ? \"found\" : \"notfound\", \"\\n\\n\";\necho in_array( \"America/New_York\", $a ) ? \"found\" : \"notfound\", \"\\n\";\necho in_array( \"America/New_York\", $b ) ? \"found\" : \"notfound\", \"\\n\";\necho in_array( \"America/New_York\", $c ) ? \"found\" : \"notfound\", \"\\n\";\necho in_array( \"America/New_York\", $d ) ? \"found\" : \"notfound\", \"\\n\\n\";\necho in_array( \"UTC\", $a ) ? \"found\" : \"notfound\", \"\\n\";\necho in_array( \"UTC\", $b ) ? \"found\" : \"notfound\", \"\\n\";\necho in_array( \"UTC\", $c ) ? \"found\" : \"notfound\", \"\\n\";\necho in_array( \"UTC\", $d ) ? \"found\" : \"notfound\", \"\\n\\n\";\necho in_array( \"US/Eastern\", $a ) ? \"found\" : \"notfound\", \"\\n\";\necho in_array( \"US/Eastern\", $b ) ? \"found\" : \"notfound\", \"\\n\";\necho in_array( \"US/Eastern\", $c ) ? \"found\" : \"notfound\", \"\\n\";\necho in_array( \"US/Eastern\", $d ) ? \"found\" : \"notfound\", \"\\n\\n\";\n?>")).toMatchSnapshot();
  });
});
