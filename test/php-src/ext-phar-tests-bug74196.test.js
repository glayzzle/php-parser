// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug74196.phpt
  it("PHP bug #74196: PharData->decompress() does not correctly support dot names", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.1.2.3.phar.tar.gz';\n$decompressed_name = str_replace( \".gz\", \"\",  $fname);\nvar_dump(file_exists($fname));\n$phar = new Phar($fname);\n$phar->decompress();\nvar_dump(file_exists($decompressed_name));\nunlink($decompressed_name);\n?>")).toMatchSnapshot();
  });
});
