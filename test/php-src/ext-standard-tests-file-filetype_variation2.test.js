// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/filetype_variation2.phpt
  it("Test filetype() function: Check character type", function () {
    expect(parser.parseCode("<?php\necho \"-- Checking for char --\\n\";\nprint( filetype(\"/dev/null\") ).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
