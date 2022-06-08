// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_getErrorCode_getErrorMessage_basic.phpt
  it("IntlCalendar::getErrorCode(), ::getErrorMessage() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = new IntlGregorianCalendar(2012, 1, 29);\nvar_dump(\n        $intlcal->getErrorCode(),\n        intlcal_get_error_code($intlcal),\n        $intlcal->getErrorMessage(),\n        intlcal_get_error_message($intlcal)\n);\n$intlcal->add(IntlCalendar::FIELD_SECOND, 2147483647);\n$intlcal->fieldDifference(-PHP_INT_MAX, IntlCalendar::FIELD_SECOND);\nvar_dump(\n        $intlcal->getErrorCode(),\n        intlcal_get_error_code($intlcal),\n        $intlcal->getErrorMessage(),\n        intlcal_get_error_message($intlcal)\n);\n?>")).toMatchSnapshot();
  });
});
