// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/msgfmt_format_intlcalendar_variant3.phpt
  it("MessageFormat accepts IntlCalendar args", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n//ini_set(\"intl.default_locale\", \"nl\");\nini_set('date.timezone', 'Europe/Lisbon');\n$cal = new IntlGregorianCalendar(2012,04,17,17,35,36);\n$msgf = new MessageFormatter('pt_PT', '{0,date,full} {0,time,h:m:s a V}');\necho $msgf->format(array($cal)), \"\\n\";\n//NOT FIXED:\n/*$msgf = new MessageFormatter('en_US',\n'{1, select, date {{0,date,full}} other {{0,time,h:m:s a V}}}');\necho \"msgf2: \", $msgf->format(array($time, 'date')), \" \",\n        $msgf->format(array($time, 'time')), \"\\n\";\n*/\n?>")).toMatchSnapshot();
  });
});
