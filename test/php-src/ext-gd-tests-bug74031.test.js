// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug74031.phpt
  it("(Bug #74031) ReflectionFunction for imagepng returns wrong number of parameters", function () {
    expect(parser.parseCode("<?php\n$ref = new ReflectionFunction('imagepng');\nvar_dump(count($ref->getParameters()));\n?>")).toMatchSnapshot();
  });
});
