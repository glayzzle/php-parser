// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug22008.phpt
  it("Bug #22008 (strip_tags() eliminates too much)", function () {
    expect(parser.parseCode("<?php\n$html = <<< HERE\n<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\n<html>\n<head>\n<title>test</title>\n</head>\n<body>\n<b>PHP!</b>\n</body>\n</html>\nHERE;\necho trim(strip_tags($html, '<b>')).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
