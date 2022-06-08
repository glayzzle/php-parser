// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeZone_listIdentifiers_basic1.phpt
  it("Test DateTimeZone::listIdentifiers function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing DateTimeZone::listIdentifiers() : basic functionality ***\\n\";\n//Set the default time zone\ndate_default_timezone_set(\"GMT\");\n$zones = DateTimeZone::listIdentifiers();\necho \"Check return tpe is ARRAY\\n\";\nvar_dump(is_array($zones));\necho \"Check array contains some common timezones\\n\";\nvar_dump(in_array(\"Europe/London\", $zones));\nvar_dump(in_array(\"America/New_York\", $zones));\nvar_dump(in_array(\"UTC\", $zones));\n?>")).toMatchSnapshot();
  });
});
