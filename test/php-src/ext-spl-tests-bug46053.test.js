// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug46053.phpt
  it("Bug #46053 (SplFileObject::seek - Endless loop)", function () {
    expect(parser.parseCode("<?php\n$x = new splfileobject(__FILE__);\n$x->getPathName();\n$x->seek(10);\n$x->seek(0);\nvar_dump(trim($x->fgets()));\n?>")).toMatchSnapshot();
  });
});
