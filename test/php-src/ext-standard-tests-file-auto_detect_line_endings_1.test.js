// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/auto_detect_line_endings_1.phpt
  it("auto_detect_line_endings --INI-- bool", function () {
    expect(parser.parseCode("<?php\nvar_dump(ini_get(\"auto_detect_line_endings\"));\nvar_dump(fgets(STDIN));\nvar_dump(fgets(STDIN));\nvar_dump(fgets(STDIN));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
