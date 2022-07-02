// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug61660.phpt
  it("Bug #61660: bin2hex(hex2bin($data)) != $data", function () {
    expect(parser.parseCode("<?php\nvar_dump(hex2bin('123'));\n?>")).toMatchSnapshot();
  });
});
