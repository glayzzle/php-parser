// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug48484.phpt
  it("Bug 48484 (array_product() always returns 0 for an empty array)", function () {
    expect(parser.parseCode("<?php\nvar_dump(array_product(array()));\n?>")).toMatchSnapshot();
  });
});
