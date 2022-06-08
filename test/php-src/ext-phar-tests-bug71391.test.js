// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug71391.phpt
  it("Phar: bug #71391: NULL Pointer Dereference in phar_tar_setupmetadata()", function () {
    expect(parser.parseCode("<?php\n// duplicate since the tar will change\ncopy(__DIR__.\"/bug71391.tar\", __DIR__.\"/bug71391.test.tar\");\n$p = new PharData(__DIR__.\"/bug71391.test.tar\");\n$p->delMetaData();\n?>\nDONE")).toMatchSnapshot();
  });
});
