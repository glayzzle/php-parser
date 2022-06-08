// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_modify-1.phpt
  it("date_modify() function [1]", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"Pacific/Kwajalein\");\n$ts = date_create(\"Fri Aug 20 1993 23:59:59\");\necho date_format($ts, 'D, d M Y H:i:s T'), \"\\n\";\n$ts->modify(\"+1 second\");\necho date_format($ts, 'D, d M Y H:i:s T'), \"\\n\";\ndate_default_timezone_set(\"Europe/Amsterdam\");\n$ts = date_create(\"Sun Mar 27 01:59:59 2005\");\necho date_format($ts, 'D, d M Y H:i:s T'), \"\\n\";\n$ts->modify(\"+1 second\");\necho date_format($ts, 'D, d M Y H:i:s T'), \"\\n\";\n$ts = date_create(\"Sun Oct 30 01:59:59 2005\");\necho date_format($ts, 'D, d M Y H:i:s T'), \"\\n\";\n$ts->modify(\"+ 1 hour 1 second\");\necho date_format($ts, 'D, d M Y H:i:s T'), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
