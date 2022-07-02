// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug71311.phpt
  it("Bug #71311 Use-after-free vulnerability in SPL(ArrayObject, unserialize)", function () {
    expect(parser.parseCode("<?php\n$data = unserialize(\"C:11:\\\"ArrayObject\\\":11:{x:i:0;r:3;X}\");\nvar_dump($data);\n?>")).toMatchSnapshot();
  });
});
