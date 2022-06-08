// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug80215.phpt
  it("Bug #80215 (imap_mail_compose() may modify by-val parameters)", function () {
    expect(parser.parseCode("<?php\n$envelope = [\n    \"from\" => 1,\n    \"to\" => 2,\n    \"custom_headers\" => [3],\n];\n$body = [[\n    \"contents.data\" => 4,\n    \"type.parameters\" => ['foo' => 5],\n    \"disposition\" => ['bar' => 6],\n], [\n    \"contents.data\" => 7,\n    \"type.parameters\" => ['foo' => 8],\n    \"disposition\" => ['bar' => 9],\n]];\nimap_mail_compose($envelope, $body);\nvar_dump($envelope, $body);\n?>")).toMatchSnapshot();
  });
});
