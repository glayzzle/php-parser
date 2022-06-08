// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_createTimeZoneIDEnumeration_basic.phpt
  it("IntlTimeZone::createTimeZoneIDEnumeration(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$enum = IntlTimeZone::createTimeZoneIDEnumeration(\n    IntlTimeZone::TYPE_ANY,\n    'PT',\n    -3600000);\nprint_r(iterator_to_array($enum));\n$enum = intltz_create_time_zone_id_enumeration(\n    IntlTimeZone::TYPE_ANY,\n    'PT',\n    -3600000);\nprint_r(iterator_to_array($enum));\n?>")).toMatchSnapshot();
  });
});
