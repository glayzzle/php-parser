// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug51934.phpt
  it("Bug #51934 (strtotime plurals / incorrect time)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('America/Los_Angeles');\necho date(\"Y-m-d H:i:s\", strtotime(\"2010-05-27 19:18 4 Sunday ago\")), \"\\n\";\necho date(\"Y-m-d H:i:s\", strtotime(\"2010-05-27 19:18 4 Sundays ago\")), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
