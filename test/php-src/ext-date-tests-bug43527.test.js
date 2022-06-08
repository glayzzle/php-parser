// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug43527.phpt
  it("Bug #43527 (DateTime created from a timestamp reports environment timezone)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"Etc/GMT+1\");\n$datetime = new DateTime('Fri, 07 Dec 2007 19:05:14 +1000');\necho $datetime->getTimezone()->getName(), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
