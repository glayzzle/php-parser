// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getDisplayName_error.phpt
  it("IntlTimeZone::getDisplayName(): errors", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$tz = IntlTimeZone::createTimeZone('Europe/Lisbon');\nvar_dump($tz->getDisplayName(false, -1));\nvar_dump(intltz_get_display_name(null, IntlTimeZone::DISPLAY_SHORT, false, 'pt_PT'));\n?>")).toMatchSnapshot();
  });
});
