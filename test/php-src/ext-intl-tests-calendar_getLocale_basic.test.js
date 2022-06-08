// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_getLocale_basic.phpt
  it("IntlCalendar::getLocale() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance('UTC');\nvar_dump($intlcal->getLocale(Locale::ACTUAL_LOCALE));\nvar_dump(intlcal_get_locale($intlcal, Locale::VALID_LOCALE));\n?>")).toMatchSnapshot();
  });
});
