// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileInfo_001.phpt
  it("Testing SplFileInfo calling the constructor twice", function () {
    expect(parser.parseCode("<?php\n$x = new splfileinfo(1);\n$x->__construct(1);\necho \"done!\\n\";\n?>")).toMatchSnapshot();
  });
});
