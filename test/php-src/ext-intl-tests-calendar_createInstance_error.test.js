// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_createInstance_error.phpt
  it("IntlCalendar::createInstance: bad arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nclass X extends IntlTimeZone {\nfunction __construct() {}\n}\nvar_dump(intlcal_create_instance(new X, NULL));\n?>")).toMatchSnapshot();
  });
});
