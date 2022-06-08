// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug70433.phpt
  it("Phar - bug #70433 - Uninitialized pointer in phar_make_dirstream when zip entry filename is \"/\"", function () {
    expect(parser.parseCode("<?php\n$phar = new PharData(__DIR__.\"/bug70433.zip\");\nvar_dump($phar);\n$meta = $phar->getMetadata();\nvar_dump($meta);\n?>\nDONE")).toMatchSnapshot();
  });
});
