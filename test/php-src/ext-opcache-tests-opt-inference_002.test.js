// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/inference_002.phpt
  it("Type inference 002: Type inference for INIT_ARRAY with invalid index", function () {
    expect(parser.parseCode("<?php\nvar_dump([[]=>&$x]);\n?>")).toMatchSnapshot();
  });
});
