// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_createTimeZoneIDEnumeration_variant2.phpt
  it("IntlTimeZone::createTimeZoneIDEnumeration(): variant without region", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$enum = IntlTimeZone::createTimeZoneIDEnumeration(\n    IntlTimeZone::TYPE_ANY);\n$countAny = count(iterator_to_array($enum));\n$enum = IntlTimeZone::createTimeZoneIDEnumeration(\n    IntlTimeZone::TYPE_CANONICAL);\n$countCanonical = count(iterator_to_array($enum));\n$enum = IntlTimeZone::createTimeZoneIDEnumeration(\n    IntlTimeZone::TYPE_CANONICAL_LOCATION);\n$countCanonicalLocation = count(iterator_to_array($enum));\nvar_dump($countAny > $countCanonical);\nvar_dump($countCanonical > $countCanonicalLocation);\n$enum = IntlTimeZone::createTimeZoneIDEnumeration(\n    IntlTimeZone::TYPE_ANY, null, null);\n$countAny2 = count(iterator_to_array($enum));\nvar_dump($countAny == $countAny2);\n$enum = IntlTimeZone::createTimeZoneIDEnumeration(\n    IntlTimeZone::TYPE_ANY, null, -3600000);\n$values = iterator_to_array($enum);\nprint_r(\narray_values(\narray_intersect($values,\narray('Etc/GMT+1', 'Atlantic/Azores'))\n));\n?>")).toMatchSnapshot();
  });
});
