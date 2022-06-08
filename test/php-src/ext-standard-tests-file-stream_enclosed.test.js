// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/stream_enclosed.phpt
  it("Unexposed/leaked stream encloses another stream", function () {
    expect(parser.parseCode("<?php\n$s = fopen('php://temp/maxmemory=1024','wb+');\n$t = fopen('php://temp/maxmemory=1024','wb+');\n/* force conversion of inner stream to STDIO. */\n$i = 0;\nwhile ($i++ < 5000) {\n    fwrite($t, str_repeat('a',1024));\n}\nzend_leak_variable($s);\nzend_leak_variable($t);\n?>")).toMatchSnapshot();
  });
});
