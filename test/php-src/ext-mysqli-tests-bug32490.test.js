// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug32490.phpt
  it("Bug #32490 (constructor of mysqli has wrong name)", function () {
    expect(parser.parseCode("<?php\nvar_dump(method_exists(\"mysqli\", \"mysqli\"));\nvar_dump(method_exists(\"mysqli\", \"__construct\"));\n?>")).toMatchSnapshot();
  });
});
