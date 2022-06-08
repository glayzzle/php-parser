// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getDisplayName_variant2-49+.phpt
  it("IntlTimeZone::getDisplayName(): type parameter (ICU >= 49 && ICU < 50.1.2)", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"error_reporting\", -1);\nini_set(\"display_errors\", 1);\n$lsb = IntlTimeZone::createTimeZone('Europe/Lisbon');\nini_set('intl.default_locale', 'en_US');\nvar_dump($lsb->getDisplayName(false, IntlTimeZone::DISPLAY_SHORT));\nvar_dump($lsb->getDisplayName(false, IntlTimeZone::DISPLAY_LONG));\nvar_dump($lsb->getDisplayName(false, IntlTimeZone::DISPLAY_SHORT_GENERIC));\nvar_dump($lsb->getDisplayName(false, IntlTimeZone::DISPLAY_LONG_GENERIC));\nvar_dump($lsb->getDisplayName(false, IntlTimeZone::DISPLAY_SHORT_GMT));\nvar_dump($lsb->getDisplayName(false, IntlTimeZone::DISPLAY_LONG_GMT));\nvar_dump($lsb->getDisplayName(false, IntlTimeZone::DISPLAY_SHORT_COMMONLY_USED));\nvar_dump($lsb->getDisplayName(false, IntlTimeZone::DISPLAY_GENERIC_LOCATION));\n?>")).toMatchSnapshot();
  });
});
