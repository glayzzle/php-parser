// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_fieldDifference_basic.phpt
  it("IntlCalendar::fieldDifference() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance('UTC');\n$intlcal->setTime(strtotime('2012-02-29 05:06:07 +0000') * 1000);\nvar_dump(\n        $intlcal->fieldDifference(\n                strtotime('2012-02-29 06:06:08 +0000') * 1000,\n                IntlCalendar::FIELD_SECOND),\n        $intlcal->get(IntlCalendar::FIELD_HOUR_OF_DAY));\n$intlcal->setTime(strtotime('2012-02-29 05:06:07 +0000') * 1000);\nvar_dump(\n        intlcal_field_difference(\n                $intlcal,\n                strtotime('2012-02-29 06:07:08 +0000') * 1000,\n                IntlCalendar::FIELD_MINUTE));\n?>")).toMatchSnapshot();
  });
});
