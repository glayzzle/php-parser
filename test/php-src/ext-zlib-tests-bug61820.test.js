// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/bug61820.phpt
  it("bug #61820 using ob_gzhandler will complain about headers already sent when no compression", function () {
    expect(parser.parseCode("<?php\nob_start('ob_gzhandler');\necho \"Hi there.\\n\";\nob_flush();\nflush();\necho \"This is confusing...\\n\";\nob_flush();\nflush();\n?>\nDONE")).toMatchSnapshot();
  });
});
