// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug58756_MessageFormatter_variant2.phpt
  it("Bug #58756: w.r.t MessageFormatter", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n//ini_set(\"intl.default_locale\", \"nl\");\n$time = 1247013673;\nini_set('date.timezone', 'America/New_York');\n$msgf = new MessageFormatter('en_US', '{0,date,full} {0,time,h:m:s a V}');\necho \"date:  \" . date('l, F j, Y g:i:s A T', $time) . \"\\n\";\necho \"msgf:  \" . $msgf->format(array($time)) . \"\\n\";\n//NOT FIXED:\n/*$msgf = new MessageFormatter('en_US',\n'{1, select, date {{0,date,full}} other {{0,time,h:m:s a V}}}');\necho \"msgf2: \", $msgf->format(array($time, 'date')), \" \",\n        $msgf->format(array($time, 'time')), \"\\n\";\n*/\n?>")).toMatchSnapshot();
  });
});
