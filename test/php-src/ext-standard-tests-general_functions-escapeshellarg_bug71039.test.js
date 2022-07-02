// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/escapeshellarg_bug71039.phpt
  it("Test escapeshellarg() string with \\0 bytes", function () {
    expect(parser.parseCode("<?php\nescapeshellarg(\"hello\\0world\");\n?>\n===DONE===")).toMatchSnapshot();
  });
});
