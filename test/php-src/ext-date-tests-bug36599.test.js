// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug36599.phpt
  it("Bug #36599 (DATE_W3C format constant incorrect).", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\necho date( DATE_ATOM, strtotime( \"2006-03-03 08:47:55\" ) ), \"\\n\";\necho date( DATE_W3C,  strtotime( \"2006-03-03 08:47:55\" ) ), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
