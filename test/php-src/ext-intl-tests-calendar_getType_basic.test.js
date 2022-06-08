// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_getType_basic.phpt
  it("IntlCalendar::getType() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance();\nVAR_DUMP($intlcal->getType());\n$intlcal = IntlCalendar::createInstance(null, \"nl_NL@calendar=hebrew\");\nVAR_DUMP(intlcal_get_type($intlcal));\n?>")).toMatchSnapshot();
  });
});
