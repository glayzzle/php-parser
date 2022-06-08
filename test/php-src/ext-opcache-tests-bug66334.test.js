// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug66334.phpt
  it("Bug #66334 (Memory Leak in new pass1_5.c optimizations)", function () {
    expect(parser.parseCode("<?php\nif (extension_loaded(\"unknown_extension\")) {\n    var_dump(1);\n} else {\n    var_dump(2);\n}\n?>")).toMatchSnapshot();
  });
});
