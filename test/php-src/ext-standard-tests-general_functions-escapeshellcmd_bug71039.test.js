// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/escapeshellcmd_bug71039.phpt
  it("Test escapeshellcmd() string with \\0 bytes", function () {
    expect(parser.parseCode("<?php\nescapeshellcmd(\"hello\\0world\");\n?>\n===DONE===")).toMatchSnapshot();
  });
});
