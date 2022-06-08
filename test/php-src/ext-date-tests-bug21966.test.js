// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug21966.phpt
  it("Bug #21966 (date() or mktime() returning bad value for mktime month param of '2')", function () {
    expect(parser.parseCode("<?php\necho '27/3/04 = ' . strval(mktime(0,0,0,3,27,2004)) . \"\\n\";   // 1080345600\necho '28/3/04 = ' . strval(mktime(0,0,0,3,28,2004)) . \"\\n\";   // -3662  - should be 108043200\necho '28/3/04 = ' . strval(mktime(2,0,0,3,28,2004)) . \"\\n\";   // 1080435600\necho '29/3/04 = ' . strval(mktime(0,0,0,3,29,2004)) . \"\\n\";   // 1080514800\necho '30/3/04 = ' . strval(mktime(0,0,0,3,30,2004)) . \"\\n\";   // 1080601200\n?>")).toMatchSnapshot();
  });
});
