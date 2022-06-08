// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeZone_serialize_type_2.phpt
  it("Test serialization of DateTimeZone objects", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\n$tz1 = new DateTimeZone(\"EST\");\nvar_dump( $tz1 );\n$serialized = serialize($tz1);\nvar_dump($serialized);\n$tz2 = unserialize($serialized);\nvar_dump($tz2);\n// Try to use unserialzied object\nvar_dump( $tz2->getName() );\n?>")).toMatchSnapshot();
  });
});
