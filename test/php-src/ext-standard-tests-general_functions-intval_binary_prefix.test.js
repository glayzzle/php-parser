// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/intval_binary_prefix.phpt
  it("Test intval() function with \"0b\" string prefix", function () {
    expect(parser.parseCode("<?php\n$isspaceChars = \" \\t\\n\\r\\f\\v\";\n$goodInputs = [\n    '0b1111111111111111111111111111111',\n    '+0b1111111111111111111111111111111',\n    '-0b1111111111111111111111111111111',\n    $isspaceChars . '0b1111111111111111111111111111111',\n    $isspaceChars . '+0b1111111111111111111111111111111',\n    $isspaceChars . '-0b1111111111111111111111111111111',\n    '0b',\n    '0B',\n    '0B1',\n    '0b000',\n    '0b001',\n    '0b00100',\n    '0b1 1'\n];\n$badInputs = [\n    'b101',\n    '0b00200',\n    '--0b123',\n    '++0b123',\n    '0bb123',\n    '0 b123',\n];\nprint \"--- Good Inputs - Base = 0 ---\\n\";\nforeach ($goodInputs as $input) {\n    var_dump(\n        intval($input, 0)\n    );\n}\nprint \"--- Good Inputs - Base = 2 ---\\n\";\nforeach ($goodInputs as $input) {\n    var_dump(\n        intval($input, 2)\n    );\n}\nprint \"--- Good Inputs - Base = default ---\\n\";\nforeach ($goodInputs as $input) {\n    var_dump(\n        intval($input)\n    );\n}\nprint \"--- Bad Inputs - Base = 0 ---\\n\";\nforeach ($badInputs as $input) {\n    var_dump(\n        intval($input, 0)\n    );\n}\nprint '--- Done ---';\n?>")).toMatchSnapshot();
  });
});
