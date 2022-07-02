// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_next_error2.phpt
  it("next - ensure we cannot pass a temporary", function () {
    expect(parser.parseCode("<?php\nfunction f() {\n    return array(1, 2);\n}\nvar_dump(next(array(1, 2)));\n?>")).toMatchSnapshot();
  });
});
