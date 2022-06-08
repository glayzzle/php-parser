// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_getAvailableLocales_basic.phpt
  it("IntlCalendar::getAvailableLocales() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$locales = IntlCalendar::getAvailableLocales();\nvar_dump(count($locales) > 100);\n$locales = intlcal_get_available_locales();\nvar_dump(in_array('pt', $locales));\n?>")).toMatchSnapshot();
  });
});
