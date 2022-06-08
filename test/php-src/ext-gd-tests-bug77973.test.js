// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug77973.phpt
  it("Bug #77973 (Uninitialized read in gdImageCreateFromXbm)", function () {
    expect(parser.parseCode("<?php\n$contents = hex2bin(\"23646566696e6520776964746820320a23646566696e652068656967687420320a737461746963206368617220626974735b5d203d7b0a7a7a787a7a\");\n$filepath = __DIR__ . '/bug77973.xbm';\nfile_put_contents($filepath, $contents);\n$im = imagecreatefromxbm($filepath);\nvar_dump($im);\n?>")).toMatchSnapshot();
  });
});
