// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_add_error.phpt
  it("IntlCalendar::add(): bad arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(intlcal_add(1, 2, 3));\n?>")).toMatchSnapshot();
  });
});
