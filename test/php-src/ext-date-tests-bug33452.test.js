// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug33452.phpt
  it("Bug #33452 (Support for year accompanying ISO week nr)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"GMT\");\necho date('Y-W', strtotime('2005-1-1')), \"\\n\";\necho date('o-W', strtotime('2005-1-1')), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
