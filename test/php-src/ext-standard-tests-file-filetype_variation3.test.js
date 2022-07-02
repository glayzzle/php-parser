// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/filetype_variation3.phpt
  it("Test filetype() function: Check block device", function () {
    expect(parser.parseCode("<?php\necho \"-- Checking for block --\\n\";\nprint( filetype(\"/dev/ram0\") ).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
