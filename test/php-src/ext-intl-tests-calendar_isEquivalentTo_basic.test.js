// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_isEquivalentTo_basic.phpt
  it("IntlCalendar::isEquivalentTo() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal1 = IntlCalendar::createInstance('Europe/Amsterdam');\n$intlcal2 = IntlCalendar::createInstance('Europe/Lisbon');\n$intlcal3 = IntlCalendar::createInstance('Europe/Amsterdam', \"nl_NL@calendar=islamic\");\n$intlcal4 = IntlCalendar::createInstance('Europe/Amsterdam');\n$intlcal4->roll(IntlCalendar::FIELD_MONTH, 1);\nvar_dump(\n        \"1 - 1\",\n        $intlcal1->isEquivalentTo($intlcal1),\n        \"1 - 2\",\n        $intlcal1->isEquivalentTo($intlcal2),\n        \"1 - 3\",\n        $intlcal1->isEquivalentTo($intlcal3),\n        \"1 - 4\",\n        $intlcal1->isEquivalentTo($intlcal4)\n);\n?>")).toMatchSnapshot();
  });
});
