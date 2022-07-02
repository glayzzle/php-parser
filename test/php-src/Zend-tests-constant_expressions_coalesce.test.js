// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constant_expressions_coalesce.phpt
  it("Constant expressions with null coalescing operator ??", function () {
    expect(parser.parseCode("<?php\nconst A = [1 => [[]]];\nconst T_1 = null ?? A[1]['undefined']['index'] ?? 1;\nconst T_2 = null ?? A['undefined']['index'] ?? 2;\nconst T_3 = null ?? A[1][0][2] ?? 3;\nconst T_4 = A[1][0][2] ?? 4;\nconst T_5 = null ?? __LINE__;\nconst T_6 = __LINE__ ?? \"bar\";\nvar_dump(T_1);\nvar_dump(T_2);\nvar_dump(T_3);\nvar_dump(T_4);\nvar_dump(T_5);\nvar_dump(T_6);\nvar_dump((function(){ static $var = null ?? A[1]['undefined']['index'] ?? 1; return $var; })());\nvar_dump((function(){ static $var = null ?? A['undefined']['index'] ?? 2; return $var; })());\nvar_dump((function(){ static $var = null ?? A[1][0][2] ?? 3; return $var; })());\nvar_dump((function(){ static $var = A[1][0][2] ?? 4; return $var; })());\nvar_dump((new class { public $var = null ?? A[1]['undefined']['index'] ?? 1; })->var);\nvar_dump((new class { public $var = null ?? A['undefined']['index'] ?? 2; })->var);\nvar_dump((new class { public $var = null ?? A[1][0][2] ?? 3; })->var);\nvar_dump((new class { public $var = A[1][0][2] ?? 4; })->var);\n?>")).toMatchSnapshot();
  });
});
