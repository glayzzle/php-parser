// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug36306.phpt
  it("Bug #36306 (crc32() 64bit)", function () {
    expect(parser.parseCode("<?php\n/* as an example how to write crc32 tests\n   PHP does not have uint values, you cannot\n   display crc32 like a signed integer.\n   Have to find some small strings to truly reproduce\n   the problem, this example being not a problem\n*/\necho dechex(crc32(\"platform independent\")) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
