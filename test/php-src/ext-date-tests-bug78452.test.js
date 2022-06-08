// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug78452.phpt
  it("Bug #78452 (diff makes wrong in hour for Asia/Tehran)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Asia/Tehran');\n$date1 = new \\DateTime('2019-09-24 11:47:24');\n$date2 = new \\DateTime('2019-08-21 12:47:24');\nvar_dump($date1->diff($date2));\n?>")).toMatchSnapshot();
  });
});
