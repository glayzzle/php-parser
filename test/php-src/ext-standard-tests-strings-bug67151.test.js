// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug67151.phpt
  it("Buf #67151: strtr with empty array crashes", function () {
    expect(parser.parseCode("<?php\nvar_dump(strtr(\"foo\", []));\n?>")).toMatchSnapshot();
  });
});
