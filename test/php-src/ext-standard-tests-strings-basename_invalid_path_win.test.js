// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/basename_invalid_path_win.phpt
  it("Test basename() function : usage variations with invalid paths", function () {
    expect(parser.parseCode("<?php\nvar_dump(basename(\"\\377\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
