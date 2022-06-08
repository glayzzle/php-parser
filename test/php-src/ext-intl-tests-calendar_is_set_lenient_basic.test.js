// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_is_set_lenient_basic.phpt
  it("IntlCalendar::isLenient(), ::setLenient() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal1 = IntlCalendar::createInstance('UTC');\nvar_dump($intlcal1->isLenient());\nvar_dump(intlcal_is_lenient($intlcal1));\nvar_dump($intlcal1->setLenient(false));\nvar_dump($intlcal1->isLenient());\nvar_dump(intlcal_set_lenient($intlcal1, true));\nvar_dump($intlcal1->isLenient());\n?>")).toMatchSnapshot();
  });
});
