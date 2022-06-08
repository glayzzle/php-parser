// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/ob_004.phpt
  it("ob_gzhandler", function () {
    expect(parser.parseCode("<?php\nob_start(\"ob_gzhandler\");\necho \"hi\\n\";\n?>")).toMatchSnapshot();
  });
});
