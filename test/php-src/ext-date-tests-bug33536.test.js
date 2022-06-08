// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug33536.phpt
  it("Bug #33456 (strtotime defaults to now even on non time string)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"GMT\");\nvar_dump(strtotime(\"monkey\"));\nprint date(\"Y-m-d\", strtotime(\"monkey\")) .\"\\n\";\nprint date(\"Y-m-d\", false) .\"\\n\";\n?>")).toMatchSnapshot();
  });
});
