// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/047.phpt
  it("Octal integer overflow", function () {
    expect(parser.parseCode("<?php\nfunction octal_inc($s) {\n    $len = strlen($s);\n    while ($len > 0) {\n        $len--;\n        if ($s[$len] != '7') {\n            $s[$len] = $s[$len] + 1;\n            return $s;\n        }\n        $s[$len] = '0';\n    }\n    return '1'.$s;\n}\n$s = sprintf(\"%o\", PHP_INT_MAX);\nvar_dump(is_long(filter_var('0'.$s, FILTER_VALIDATE_INT, array(\"flags\"=>FILTER_FLAG_ALLOW_OCTAL))));\n$s = octal_inc($s);\nvar_dump(is_long(filter_var('0'.$s, FILTER_VALIDATE_INT, array(\"flags\"=>FILTER_FLAG_ALLOW_OCTAL))));\n$s = sprintf(\"%o\", ~0);\nvar_dump(is_long(filter_var('0'.$s, FILTER_VALIDATE_INT, array(\"flags\"=>FILTER_FLAG_ALLOW_OCTAL))));\n$s = octal_inc($s);\nvar_dump(filter_var('0'.$s, FILTER_VALIDATE_INT, array(\"flags\"=>FILTER_FLAG_ALLOW_OCTAL)));\n?>")).toMatchSnapshot();
  });
});
