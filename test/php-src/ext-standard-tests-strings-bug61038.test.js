// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug61038.phpt
  it("Bug #61038: unpack(\"a5\", \"str\\0\\0\") does not work as expected", function () {
    expect(parser.parseCode("<?php\nvar_dump(unpack(\"a4\", \"str\\0\\0\"));\nvar_dump(unpack(\"a5\", \"str\\0\\0\"));\nvar_dump(unpack(\"a6\", \"str\\0\\0\"));\nvar_dump(unpack(\"a*\", \"str\\0\\0\"));\n?>")).toMatchSnapshot();
  });
});
