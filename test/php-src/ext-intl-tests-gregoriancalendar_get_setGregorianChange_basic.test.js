// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/gregoriancalendar_get_setGregorianChange_basic.phpt
  it("IntlGregorianCalendar::get/setGregorianChange(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\ndate_default_timezone_set('Europe/Amsterdam');\n$intlcal = new IntlGregorianCalendar();\nvar_dump($intlcal->getGregorianChange());\nvar_dump($intlcal->setGregorianChange(0));\nvar_dump(intlgregcal_get_gregorian_change($intlcal));\nvar_dump(intlgregcal_set_gregorian_change($intlcal, 1));\nvar_dump($intlcal->getGregorianChange());\n?>")).toMatchSnapshot();
  });
});
