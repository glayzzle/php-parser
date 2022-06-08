// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_010.phpt
  it("Initializer of overwritten property should be resolved against the correct class", function () {
    expect(parser.parseCode("<?php\nvar_dump((new Bar)->prop);\n?>")).toMatchSnapshot();
  });
});
