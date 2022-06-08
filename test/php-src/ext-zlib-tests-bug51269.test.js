// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/bug51269.phpt
  it("Bug #51269 (zlib.output_compression Overwrites Vary Header)", function () {
    expect(parser.parseCode("<?php\nheader('Vary: Cookie');\necho 'foo';\n?>")).toMatchSnapshot();
  });
});
