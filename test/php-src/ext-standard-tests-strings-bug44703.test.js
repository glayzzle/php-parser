// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug44703.phpt
  it("Bug #44703 (htmlspecialchars() does not detect bad character set argument)", function () {
    expect(parser.parseCode("<?php\nvar_dump(htmlspecialchars(\"<a href='test'>Test</a>\", ENT_COMPAT, 1));\nvar_dump(htmlspecialchars(\"<a href='test'>Test</a>\", ENT_COMPAT, 12));\nvar_dump(htmlspecialchars(\"<a href='test'>Test</a>\", ENT_COMPAT, 125));\nvar_dump(htmlspecialchars(\"<a href='test'>Test</a>\", ENT_COMPAT, 1252));\nvar_dump(htmlspecialchars(\"<a href='test'>Test</a>\", ENT_COMPAT, 12526));\nvar_dump(htmlspecialchars(\"<>\", ENT_COMPAT, 866));\nvar_dump(htmlspecialchars(\"<>\", ENT_COMPAT, 8666));\nvar_dump(htmlspecialchars(\"<>\", ENT_COMPAT, NULL));\nvar_dump(htmlspecialchars(\"<>\", ENT_COMPAT, 'SJIS'));\nvar_dump(htmlspecialchars(\"<>\", ENT_COMPAT, 'SjiS'));\nvar_dump(htmlspecialchars(\"<>\", ENT_COMPAT, str_repeat('a', 100)));\n?>")).toMatchSnapshot();
  });
});
