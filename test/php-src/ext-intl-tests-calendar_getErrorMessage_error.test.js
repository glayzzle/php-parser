// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_getErrorMessage_error.phpt
  it("IntlCalendar::getErrorMessage(): bad arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(intlcal_get_error_message(null));\n?>")).toMatchSnapshot();
  });
});
