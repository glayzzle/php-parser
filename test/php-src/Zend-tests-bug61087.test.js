// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug61087.phpt
  it("Bug #61087 (Memory leak in parse_ini_file when specifying invalid scanner mode)", function () {
    expect(parser.parseCode("<?php\n// the used file is actually irrelevant, so just use this file\n// even though it's not an .ini\nparse_ini_file(__FILE__, false, 100);\n?>")).toMatchSnapshot();
  });
});
