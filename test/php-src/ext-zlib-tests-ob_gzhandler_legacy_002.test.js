// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/ob_gzhandler_legacy_002.phpt
  it("ob_gzhandler legacy", function () {
    expect(parser.parseCode("<?php\nif (false !== ob_gzhandler(\"\", PHP_OUTPUT_HANDLER_START)) {\n    ini_set(\"zlib.output_compression\", 0);\n    ob_start(\"ob_gzhandler\");\n}\necho \"hi\\n\";\n?>")).toMatchSnapshot();
  });
});
