// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/003.phpt
  it("Phar::canCompress", function () {
    expect(parser.parseCode("<?php\n/* check this works and actually returns the boolean value */\nvar_dump(Phar::canCompress() == (\n    extension_loaded(\"zlib\") || extension_loaded(\"bz2\")\n    ));\n?>")).toMatchSnapshot();
  });
});
