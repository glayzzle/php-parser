// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/escapeshellarg_basic-win32.phpt
  it("Test escapeshellarg() function: basic test", function () {
    expect(parser.parseCode("<?php\necho \"Simple testcase for escapeshellarg() function\\n\";\nvar_dump(escapeshellarg(\"Mr O'Neil\"));\nvar_dump(escapeshellarg(\"Mr O\\'Neil\"));\nvar_dump(escapeshellarg(\"%FILENAME\"));\nvar_dump(escapeshellarg(\"!FILENAME\"));\nvar_dump(escapeshellarg(\"\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
