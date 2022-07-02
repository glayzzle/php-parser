// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/bug74039.phpt
  it("Bug #74039: is_infinite(-INF) returns false", function () {
    expect(parser.parseCode("<?php\nvar_dump(is_finite(INF));\nvar_dump(is_infinite(INF));\nvar_dump(is_nan(INF));\nvar_dump(is_finite(-INF));\nvar_dump(is_infinite(-INF));\nvar_dump(is_nan(-INF));\nvar_dump(is_finite(NAN));\nvar_dump(is_infinite(NAN));\nvar_dump(is_nan(NAN));\n?>")).toMatchSnapshot();
  });
});
