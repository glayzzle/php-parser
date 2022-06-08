// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_serialize.phpt
  it("Test serialization of DateTime objects", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\n$date1 = new DateTime(\"2005-07-14 22:30:41\");\nvar_dump($date1);\n$serialized = serialize($date1);\nvar_dump($serialized);\n$date2 = unserialize($serialized);\nvar_dump($date2);\n// Try to use unserialzied object\nvar_dump( $date2->format( \"F j, Y, g:i a\") );\n?>")).toMatchSnapshot();
  });
});
