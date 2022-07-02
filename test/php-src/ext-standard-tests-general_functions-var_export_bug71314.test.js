// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/var_export_bug71314.phpt
  it("Bug #71314 (var_export(INF) prints INF.0)", function () {
    expect(parser.parseCode("<?php\nvar_export(INF);\necho PHP_EOL;\nvar_export(-INF);\necho PHP_EOL;\nvar_export(NAN);\necho PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
