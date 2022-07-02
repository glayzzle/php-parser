// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/bug25665.phpt
  it("Bug #25665 (var_dump () hangs on Nan and INF)", function () {
    expect(parser.parseCode("<?php\nset_time_limit(5);\nvar_dump(acos(1.01));\nvar_dump(log(0));\n?>")).toMatchSnapshot();
  });
});
