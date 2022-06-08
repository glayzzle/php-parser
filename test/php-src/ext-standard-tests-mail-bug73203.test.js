// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/mail/bug73203.phpt
  it("Bug #73203 (passing additional_parameters causes mail to fail)", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    mail('test@example.com', 'subject', 'message', 'From: lala@example.com', '')\n);\n?>")).toMatchSnapshot();
  });
});
