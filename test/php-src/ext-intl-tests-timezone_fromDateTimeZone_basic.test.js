// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_fromDateTimeZone_basic.phpt
  it("IntlTimeZone::fromDateTimeZone(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\ndate_default_timezone_set('Europe/Lisbon');\n$tz = IntlTimeZone::fromDateTimeZone(new DateTimeZone('Europe/Amsterdam'));\nvar_dump($tz->getID(), $tz->getRawOffset());\n$dt = new DateTime('2012-01-01 00:00:00 CET');\n$dtz = $dt->getTimeZone();\n/* this is different from new DateTimeZone('CET'),\n * which gives a Europe/Berlin timezone */\nvar_dump($dtz->getName());\n$tz = IntlTimeZone::fromDateTimeZone($dtz);\nvar_dump($tz->getID(), $tz->getRawOffset());\n$dt = new DateTime('2012-01-01 00:00:00 +0340');\n$dtz = $dt->getTimeZone();\n/* I don't think this timezone can be generated without a DateTime object */\nvar_dump($dtz->getName());\n$tz = IntlTimeZone::fromDateTimeZone($dtz);\nvar_dump($tz->getID(), $tz->getRawOffset() /* (3*60+40)*60000 */);\n?>")).toMatchSnapshot();
  });
});
