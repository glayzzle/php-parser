// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/basename_invalid_path.phpt
  it("Test basename() function : usage variations with invalid paths", function () {
    expect(parser.parseCode("<?php\nsetlocale(LC_CTYPE, \"C\");\nvar_dump(bin2hex(basename(\"\\xff\")));\nvar_dump(bin2hex(basename(\"a\\xffb\")));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
