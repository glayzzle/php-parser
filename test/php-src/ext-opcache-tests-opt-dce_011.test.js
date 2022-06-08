// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/dce_011.phpt
  it("Incorrect DCE of ADD_ARRAY_ELEMENT", function () {
    expect(parser.parseCode("<?php\n[0, \"$a\" => \"$b\"];\n?>\nDONE")).toMatchSnapshot();
  });
});
