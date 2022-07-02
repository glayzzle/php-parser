// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constant_expressions.phpt
  it("Constant Expressions", function () {
    expect(parser.parseCode("<?php\nconst T_1 = 1 << 1;\nconst T_2 = 1 / 2;\nconst T_3 = 1.5 + 1.5;\nconst T_4 = \"foo\" . \"bar\";\nconst T_5 = (1.5 + 1.5) * 2;\nconst T_6 = \"foo\" . 2 . 3 . 4.0;\nconst T_7 = __LINE__;\nconst T_8 = <<<ENDOFSTRING\nThis is a test string\nENDOFSTRING;\nconst T_9 = ~-1;\nconst T_10 = (-1?:1) + (0?2:3);\nconst T_11 = 1 && 0;\nconst T_12 = 1 and 1;\nconst T_13 = 0 || 0;\nconst T_14 = 1 or 0;\nconst T_15 = 1 xor 1;\nconst T_16 = 1 xor 0;\nconst T_17 = 1 < 0;\nconst T_18 = 0 <= 0;\nconst T_19 = 1 > 0;\nconst T_20 = 1 >= 0;\nconst T_21 = 1 === 1;\nconst T_22 = 1 !== 1;\nconst T_23 = 0 != \"0\";\nconst T_24 = 1 == \"1\";\n// Test order of operations\nconst T_25 = 1 + 2 * 3;\n// Test for memory leaks\nconst T_26 = \"1\" + 2 + \"3\";\n// Allow T_POW\nconst T_27 = 2 ** 3;\nvar_dump(T_1);\nvar_dump(T_2);\nvar_dump(T_3);\nvar_dump(T_4);\nvar_dump(T_5);\nvar_dump(T_6);\nvar_dump(T_7);\nvar_dump(T_8);\nvar_dump(T_9);\nvar_dump(T_10);\nvar_dump(T_11);\nvar_dump(T_12);\nvar_dump(T_13);\nvar_dump(T_14);\nvar_dump(T_15);\nvar_dump(T_16);\nvar_dump(T_17);\nvar_dump(T_18);\nvar_dump(T_19);\nvar_dump(T_20);\nvar_dump(T_21);\nvar_dump(T_22);\nvar_dump(T_23);\nvar_dump(T_24);\nvar_dump(T_25);\nvar_dump(T_26);\nvar_dump(T_27);\n?>")).toMatchSnapshot();
  });
});
