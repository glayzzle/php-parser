// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug69267.phpt
  it("Bug #69267: mb_strtolower fails on titlecase characters", function () {
    expect(parser.parseCode("<?php\n$str_l = \"ǆǉǌǳ\";\n$str_u = \"ǄǇǊǱ\";\n$str_t = \"ǅǈǋǲ\";\nvar_dump(mb_strtolower($str_l));\nvar_dump(mb_strtolower($str_u));\nvar_dump(mb_strtolower($str_t));\nvar_dump(mb_strtoupper($str_l));\nvar_dump(mb_strtoupper($str_u));\nvar_dump(mb_strtoupper($str_t));\nvar_dump(mb_convert_case($str_l, MB_CASE_TITLE));\nvar_dump(mb_convert_case($str_u, MB_CASE_TITLE));\nvar_dump(mb_convert_case($str_t, MB_CASE_TITLE));\n$str_l = \"ᾳ\";\n$str_t = \"ᾼ\";\nvar_dump(mb_strtolower($str_l));\nvar_dump(mb_strtolower($str_t));\nvar_dump(mb_strtoupper($str_l));\nvar_dump(mb_strtoupper($str_t));\nvar_dump(mb_convert_case($str_l, MB_CASE_TITLE));\nvar_dump(mb_convert_case($str_t, MB_CASE_TITLE));\n?>")).toMatchSnapshot();
  });
});
