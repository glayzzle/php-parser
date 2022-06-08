// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_createEnumeration_basic.phpt
  it("IntlTimeZone::createEnumeration(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$tz = IntlTimeZone::createEnumeration();\nvar_dump(get_class($tz));\n$count = count(iterator_to_array($tz));\nvar_dump($count > 300);\n$tz = intltz_create_enumeration();\nvar_dump(get_class($tz));\n$count2 = count(iterator_to_array($tz));\nvar_dump($count == $count2);\n?>")).toMatchSnapshot();
  });
});
