// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_setTimeZone_error.phpt
  it("IntlDateFormatter::setTimeZone() bad args", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\nini_set(\"date.timezone\", 'Atlantic/Azores');\n$df = new IntlDateFormatter(NULL, 0, 0);\nvar_dump($df->setTimeZone(array()));\nvar_dump($df->setTimeZone('non existing timezone'));\n?>")).toMatchSnapshot();
  });
});
