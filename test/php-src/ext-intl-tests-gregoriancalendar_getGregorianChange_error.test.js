// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/gregoriancalendar_getGregorianChange_error.phpt
  it("IntlGregorianCalendar::getGregorianChange(): bad arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(intlgregcal_get_gregorian_change(1));\n?>")).toMatchSnapshot();
  });
});
