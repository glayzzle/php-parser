// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/bug75299.phpt
  it("Bug #75299 Wrong reflection on inflate_init and inflate_add", function () {
    expect(parser.parseCode("<?php\n$r = new ReflectionFunction('inflate_init');\nvar_dump($r->getNumberOfRequiredParameters());\nvar_dump($r->getNumberOfParameters());\n$r = new ReflectionFunction('inflate_add');\nvar_dump($r->getNumberOfRequiredParameters());\nvar_dump($r->getNumberOfParameters());\n?>")).toMatchSnapshot();
  });
});
