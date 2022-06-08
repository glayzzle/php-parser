// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/msgfmt_millisecond_dates.phpt
  it("MessageFrormatter parses and formats dates with millisecond precision", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\ndate_default_timezone_set('Europe/Lisbon'); //ignored for now, see bug #58756\n$d = 1336308097.123;\n$mf = new MessageFormatter('en_US',\n    \"On {0,time,yyyy-MM-dd G 'at' HH:mm:ss.SSS zzz} something odd happened\");\nvar_dump($mf->format(array(1336310569.123)));\n$p = 'On 2012-05-06 AD at 15:22:49.123 GMT+02:00 something odd happened';\nvar_dump($mf->parse($p));\n?>")).toMatchSnapshot();
  });
});
