// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug40432.phpt
  it("Bug #40432 (strip_tags() fails with greater than in attribute)", function () {
    expect(parser.parseCode("<?php\necho strip_tags('<span title=\"test > all\">this</span>') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
