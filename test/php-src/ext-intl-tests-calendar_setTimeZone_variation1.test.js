// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_setTimeZone_variation1.phpt
  it("IntlCalendar::setTimeZone() variation with NULL arg", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance('Europe/Amsterdam');\nprint_r($intlcal->getTimeZone()->getID());\necho \"\\n\";\nvar_dump($intlcal->get(IntlCalendar::FIELD_ZONE_OFFSET));\n/* passing NULL has no effect */\n$intlcal->setTimeZone(null);\nprint_r($intlcal->getTimeZone()->getID());\necho \"\\n\";\nvar_dump($intlcal->get(IntlCalendar::FIELD_ZONE_OFFSET));\n?>")).toMatchSnapshot();
  });
});
