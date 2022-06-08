// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug81223.phpt
  it("Bug #81223 (flock() only locks first byte of file)", function () {
    expect(parser.parseCode("<?php\n$filename = __FILE__;\n$stream1 = fopen($filename, \"r\");\nvar_dump(flock($stream1, LOCK_EX));\n$stream2 = fopen($filename, \"r\");\nvar_dump(fread($stream2, 5));\nfseek($stream2, 1);\nvar_dump(fread($stream2, 4));\n?>")).toMatchSnapshot();
  });
});
