// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/gregoriancalendar___construct_basic.phpt
  it("IntlGregorianCalendar::__construct(): basic", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\ndate_default_timezone_set('Europe/Amsterdam');\n$intlcal = intlgregcal_create_instance();\nvar_dump($intlcal->getTimeZone()->getId());\nvar_dump($intlcal->getLocale(1));\n$intlcal = new IntlGregorianCalendar('Europe/Lisbon', NULL);\nvar_dump($intlcal->getTimeZone()->getId());\nvar_dump($intlcal->getLocale(1));\n$intlcal = new IntlGregorianCalendar(NULL, 'pt_PT');\nvar_dump($intlcal->getTimeZone()->getId());\nvar_dump($intlcal->getLocale(1));\n$intlcal = new IntlGregorianCalendar('Europe/Lisbon', 'pt_PT');\nvar_dump($intlcal->getTimeZone()->getId());\nvar_dump($intlcal->getLocale(1));\n$intlcal = new IntlGregorianCalendar('Europe/Paris', 'fr_CA', NULL, NULL, NULL, NULL);\nvar_dump($intlcal->getTimeZone()->getId());\nvar_dump($intlcal->getLocale(1));\nvar_dump($intlcal->getType());\n?>")).toMatchSnapshot();
  });
});
