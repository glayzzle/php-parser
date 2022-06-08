// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_formatObject_datetime.phpt
  it("IntlDateFormatter::formatObject(): DateTime tests", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\nini_set(\"date.timezone\", \"Europe/Lisbon\");\n$dt = new DateTime('2012-01-01 00:00:00'); //Europe/Lisbon\necho IntlDateFormatter::formatObject($dt), \"\\n\";\necho IntlDateFormatter::formatObject($dt, IntlDateFormatter::FULL), \"\\n\";\necho IntlDateFormatter::formatObject($dt, null, \"en-US\"), \"\\n\";\necho IntlDateFormatter::formatObject($dt, array(IntlDateFormatter::SHORT, IntlDateFormatter::FULL), \"en-US\"), \"\\n\";\necho IntlDateFormatter::formatObject($dt, 'E y-MM-d HH,mm,ss.SSS v', \"en-US\"), \"\\n\";\n$dt = new DateTime('2012-01-01 05:00:00+03:00');\necho IntlDateFormatter::formatObject($dt, IntlDateFormatter::FULL), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
