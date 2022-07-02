// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug76735.phpt
  it("Bug #76735 (Incorrect message in fopen on invalid mode)", function () {
    expect(parser.parseCode("<?php\nfopen(__FILE__, 'Q');\n?>")).toMatchSnapshot();
  });
});
