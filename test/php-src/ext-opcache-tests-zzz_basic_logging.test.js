// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/zzz_basic_logging.phpt
  it("Test basic logging for the Opcache", function () {
    expect(parser.parseCode("<?php\necho \"Foo Bar\\n\";\nopcache_reset();\necho \"Opcache reset\";\n?>")).toMatchSnapshot();
  });
});
