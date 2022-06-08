// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_set_variation1.phpt
  it("IntlCalendar::set() argument variations", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance('UTC');\n$intlcal->clear();\nvar_dump($intlcal->set(2012, 1, 29));\nvar_dump($intlcal->getTime(),\n        strtotime('2012-02-29 00:00:00 +0000') * 1000.);\n//two minutes to midnight!\nvar_dump($intlcal->set(2012, 1, 29, 23, 58));\nvar_dump($intlcal->getTime(),\n        strtotime('2012-02-29 23:58:00 +0000') * 1000.);\nvar_dump($intlcal->set(2012, 1, 29, 23, 58, 31));\nvar_dump($intlcal->getTime(),\n        strtotime('2012-02-29 23:58:31 +0000') * 1000.);\n?>")).toMatchSnapshot();
  });
});
