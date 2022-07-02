// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug21744.phpt
  it("Bug #21744 (strip_tags misses exclamation marks in alt text)", function () {
    expect(parser.parseCode("<?php\n$test = <<< HERE\n<a href=\"test?test\\\\!!!test\">test</a>\n<!-- test -->\nHERE;\nprint strip_tags($test, '');\nprint strip_tags($test, '<a>');\n?>")).toMatchSnapshot();
  });
});
