// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug50847.phpt
  it("Bug #50847 (strip_tags() removes all tags greater than 1023 bytes long)", function () {
    expect(parser.parseCode("<?php\n$var = '<param value=\"' . str_repeat(\"a\", 2048) . '\" />';\nvar_dump(strip_tags($var, \"<param>\"), strip_tags($var));\n?>")).toMatchSnapshot();
  });
});
