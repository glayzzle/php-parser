// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/escapeshellarg_basic-win32-mb.phpt
  it("Test escapeshellarg() function: basic test with UTF-8 strings", function () {
    expect(parser.parseCode("<?php\necho \"Simple testcase for escapeshellarg() function\\n\";\nvar_dump(escapeshellarg(\"テストマルチバイ'ト・パス\"));\nvar_dump(escapeshellarg(\"測試多字\\'節路徑\"));\nvar_dump(escapeshellarg(\"%füße\"));\nvar_dump(escapeshellarg(\"!шницель\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
