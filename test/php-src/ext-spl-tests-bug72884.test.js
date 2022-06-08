// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug72884.phpt
  it("Bug #72884:  isCloneable() on SplFileObject should return false", function () {
    expect(parser.parseCode("<?php\n$x=new SplFileObject(__FILE__);\n$r=new ReflectionObject($x);\nvar_dump($r->isCloneable());\n?>")).toMatchSnapshot();
  });
});
