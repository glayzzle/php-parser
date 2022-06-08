// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_const_field_field_count.phpt
  it("IntlCalendar::FIELD_FIELD_COUNT", function () {
    expect(parser.parseCode("<?php\nvar_dump(IntlCalendar::FIELD_FIELD_COUNT);\n?>")).toMatchSnapshot();
  });
});
