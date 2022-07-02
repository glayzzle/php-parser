// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/var_export_bug66179.phpt
  it("Bug #66179 (var_export() exports float as integer)", function () {
    expect(parser.parseCode("<?php\nvar_export(1.0);\necho PHP_EOL;\nvar_export(123.0);\necho PHP_EOL;\nvar_export(-1.0);\necho PHP_EOL;\nvar_export(-123.0);\necho PHP_EOL;\nvar_export(0.0);\necho PHP_EOL;\nvar_export(-0.0);\necho PHP_EOL;\nvar_export(10000000000000000.0);\necho PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
