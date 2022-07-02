// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug53319.phpt
  it("Bug #53319 (Strip_tags() may strip '<br />' incorrectly)", function () {
    expect(parser.parseCode("<?php\n$str = '<br /><br  />USD<input type=\"text\"/><br/>CDN<br><input type=\"text\" />';\nvar_dump(strip_tags($str, '<input>'));\nvar_dump(strip_tags($str, '<br><input>') === $str);\nvar_dump(strip_tags($str));\nvar_dump(strip_tags('<a/b>', '<a>'));\n?>")).toMatchSnapshot();
  });
});
