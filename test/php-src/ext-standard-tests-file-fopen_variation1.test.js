// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fopen_variation1.phpt
  it("fopen() with relative path on a file in the script directory", function () {
    expect(parser.parseCode("<?php\n$file = basename(__FILE__);\n$fd = fopen($file, \"r\", true);\nvar_dump($fd);\nfclose($fd);\n?>")).toMatchSnapshot();
  });
});
