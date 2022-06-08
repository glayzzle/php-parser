// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_toDateTimeZone_basic.phpt
  it("IntlTimeZone::toDateTimeZone(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\ndate_default_timezone_set('Europe/Lisbon');\nfunction do_test(IntlTimeZone $tz, $proc = false) {\n    var_dump($tz->getID(), $tz->getRawOffset());\n    if (!$proc)\n        $dtz = $tz->toDateTimeZone();\n    else\n        $dtz = intltz_to_date_time_zone($tz);\n    var_dump($dtz->getName(), $dtz->getOffset(new DateTime('2012-01-01 00:00:00')));\n}\ndo_test(IntlTimeZone::createTimeZone('CET'));\ndo_test(IntlTimeZone::createTimeZone('Europe/Amsterdam'));\ndo_test(IntlTimeZone::createTimeZone('GMT+0405'), true);\n?>")).toMatchSnapshot();
  });
});
