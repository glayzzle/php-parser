// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/gregoriancalendar___construct_variant1.phpt
  it("IntlGregorianCalendar::__construct(): argument variants", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\ndate_default_timezone_set('Europe/Amsterdam');\n$intlcal = intlgregcal_create_instance(2012, 1, 29, 16, 0, 0);\nvar_dump($intlcal->getTimeZone()->getId());\nvar_dump($intlcal->getTime(), (float)strtotime('2012-02-29 16:00:00') * 1000);\n$intlcal = new IntlGregorianCalendar(2012, 1, 29, 16, 7, 8);\nvar_dump($intlcal->getTime(), (float)strtotime('2012-02-29 16:07:08') * 1000);\nvar_dump($intlcal->getType());\n?>")).toMatchSnapshot();
  });
});
