// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug33562.phpt
  it("Bug #33562 (date(\"\") crashes)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"GMT\");\necho \"[\", date(\"\"), \"]\\n\";\necho \"done\";\n?>")).toMatchSnapshot();
  });
});
