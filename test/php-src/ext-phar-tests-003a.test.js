// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/003a.phpt
  it("Phar::canCompress, specific", function () {
    expect(parser.parseCode("<?php\nvar_dump(Phar::canCompress(Phar::GZ) == extension_loaded(\"zlib\"));\nvar_dump(Phar::canCompress(Phar::BZ2) == extension_loaded(\"bz2\"));\n?>")).toMatchSnapshot();
  });
});
