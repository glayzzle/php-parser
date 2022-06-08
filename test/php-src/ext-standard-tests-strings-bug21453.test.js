// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug21453.phpt
  it("Bug #21453 (handling of non-encoded <)", function () {
    expect(parser.parseCode("<?php\n$test = \"\n<table>\n    <tr><td>first cell before < first cell after</td></tr>\n    <tr><td>second cell before < second cell after</td></tr>\n</table>\";\nvar_dump(strip_tags($test));\n?>")).toMatchSnapshot();
  });
});
