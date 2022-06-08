// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/filetype_basic.phpt
  it("Test filetype() function: Basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing filetype() with files and dirs ***\\n\";\nprint( filetype(__FILE__) ).\"\\n\";\nprint( filetype(\".\") ).\"\\n\";\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
