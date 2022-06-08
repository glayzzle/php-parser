// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gh7953.phpt
  it("GH-7953 (ob_clean() only may not set Content-* header)", function () {
    expect(parser.parseCode("<?php\nob_start('ob_gzhandler');\nob_clean();\necho 'Hello World';\n?>")).toMatchSnapshot();
  });
});
