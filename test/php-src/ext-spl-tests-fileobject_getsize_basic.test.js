// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fileobject_getsize_basic.phpt
  it("SPL: SplFileObject::getSize", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__ .\"/data.txt\";\nfile_put_contents($file, \"foobar\");\n$s = new SplFileObject( $file );\necho $s->getSize();\n?>")).toMatchSnapshot();
  });
});
