// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_next_error1.phpt
  it("next - ensure warning is received when passing an indirect temporary.", function () {
    expect(parser.parseCode("<?php\nfunction f() {\n    return array(1, 2);\n}\nvar_dump(next(f()));\n?>")).toMatchSnapshot();
  });
});
