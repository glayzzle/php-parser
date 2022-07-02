// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/bug60282.phpt
  it("Bug #60282 (Segfault when using ob_gzhandler() with open buffers)", function () {
    expect(parser.parseCode("<?php\nob_start();\nob_start();\nob_start('ob_gzhandler');\necho \"done\";\n?>")).toMatchSnapshot();
  });
});
