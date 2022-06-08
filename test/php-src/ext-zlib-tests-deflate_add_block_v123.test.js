// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/deflate_add_block_v123.phpt
  it("Test deflate_add() errors with ZLIB_BLOCK in zlib < 1.2.4", function () {
    expect(parser.parseCode("<?php\n$resource = deflate_init(ZLIB_ENCODING_GZIP);\nvar_dump(deflate_add($resource, \"aaaaaaaaaaaaaaaaaaaaaa\", ZLIB_BLOCK));\n?>")).toMatchSnapshot();
  });
});
