// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_createTimeZoneIDEnumeration_variant1.phpt
  it("IntlTimeZone::createTimeZoneIDEnumeration(): variant without offset", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$enum = IntlTimeZone::createTimeZoneIDEnumeration(\n    IntlTimeZone::TYPE_ANY,\n    'PT');\n$values = iterator_to_array($enum);\nvar_dump(in_array('Europe/Lisbon', $values));\nvar_dump(in_array('Atlantic/Azores', $values));\n$enum = IntlTimeZone::createTimeZoneIDEnumeration(\n    IntlTimeZone::TYPE_ANY,\n    'PT',\n    null);\n$values2 = iterator_to_array($enum);\nvar_dump($values2 == $values);\n?>")).toMatchSnapshot();
  });
});
