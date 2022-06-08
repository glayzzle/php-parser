// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/ob_005.phpt
  it("ob_gzhandler", function () {
    expect(parser.parseCode("<?php\nob_start(\"ob_gzhandler\");\nini_set(\"zlib.output_compression\", 0);\necho \"hi\\n\";\n?>")).toMatchSnapshot();
  });
});
