// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/048.phpt
  it("Hex integer overflow", function () {
    expect(parser.parseCode("<?php\nfunction hex_inc($s) {\n    $len = strlen($s);\n    while ($len > 0) {\n        $len--;\n        if ($s[$len] != 'f') {\n            if ($s[$len] == '9') {\n                $s[$len] = 'a';\n            } else {\n                $s[$len] = $s[$len] + 1;\n            }\n            return $s;\n        }\n        $s[$len] = '0';\n    }\n    return '1'.$s;\n}\n$s = sprintf(\"%x\", PHP_INT_MAX);\nvar_dump(is_long(filter_var('0x'.$s, FILTER_VALIDATE_INT, array(\"flags\"=>FILTER_FLAG_ALLOW_HEX))));\n$s = hex_inc($s);\nvar_dump(is_long(filter_var('0x'.$s, FILTER_VALIDATE_INT, array(\"flags\"=>FILTER_FLAG_ALLOW_HEX))));\n$s = sprintf(\"%x\", ~0);\nvar_dump(is_long(filter_var('0x'.$s, FILTER_VALIDATE_INT, array(\"flags\"=>FILTER_FLAG_ALLOW_HEX))));\n$s = hex_inc($s);\nvar_dump(filter_var('0x'.$s, FILTER_VALIDATE_INT, array(\"flags\"=>FILTER_FLAG_ALLOW_HEX)));\n?>")).toMatchSnapshot();
  });
});
