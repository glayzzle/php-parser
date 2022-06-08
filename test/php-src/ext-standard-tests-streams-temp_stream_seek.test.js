// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/temp_stream_seek.phpt
  it("BUG: php://temp does not preserve file-pointer once it switches from memory to temporary file", function () {
    expect(parser.parseCode("<?php\n$f = fopen('php://temp/maxmemory:1024', 'r+');\nfwrite($f, str_repeat(\"1\", 738));\nfseek($f, 0, SEEK_SET);\nfwrite($f, str_repeat(\"2\", 512));\nfseek($f, 0, SEEK_SET);\nvar_dump(fread($f, 16));\nfseek($f, 0, SEEK_END);\nvar_dump(ftell($f));\n?>")).toMatchSnapshot();
  });
});
