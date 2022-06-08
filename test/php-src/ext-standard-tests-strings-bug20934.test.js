// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug20934.phpt
  it("Bug #20934 (htmlspecialchars returns latin1 from UTF-8)", function () {
    expect(parser.parseCode("<?php\n$str = utf8_encode(\"\\xe0\\xe1\");\nvar_dump(utf8_decode($str));\nvar_dump(utf8_decode(htmlspecialchars($str, ENT_COMPAT, \"UTF-8\")));\n?>")).toMatchSnapshot();
  });
});
