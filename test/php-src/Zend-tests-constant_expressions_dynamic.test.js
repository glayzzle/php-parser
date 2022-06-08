// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constant_expressions_dynamic.phpt
  it("Dynamic Constant Expressions", function () {
    expect(parser.parseCode("<?php\nconst C_0 = 0;\nconst C_1 = 1;\nconst C_foo = \"0foo\";\nconst C_arr = [0 => 0, \"foo\" => \"foo\"];\nconst T_1 = C_1 | 2;\nconst T_2 = C_1 . \"foo\";\nconst T_3 = C_1 > 1;\nconst T_4 = C_1 >= 1;\nconst T_5 = -C_1;\nconst T_6 = +C_1;\nconst T_7 = +C_foo;\nconst T_8 = !C_1;\nconst T_9 = C_0 || 0;\nconst T_10 = C_1 || 0;\nconst T_11 = C_0 && 1;\nconst T_12 = C_1 && 1;\nconst T_13 = C_0 ? \"foo\" : \"bar\";\nconst T_14 = C_1 ? \"foo\" : \"bar\";\nconst T_15 = C_0 ?: \"bar\";\nconst T_16 = C_1 ?: \"bar\";\nconst T_17 = C_arr[0];\nconst T_18 = C_arr[\"foo\"];\nconst T_19 = [\n    C_0,\n    \"foo\" => \"foo\",\n    42 => 42,\n    3.14 => 3.14,\n    null => null,\n    false => false,\n    true => true,\n];\neval(\"const T_20x = 'a';\");\nconst T_20 = null ?: (T_20x . 'bc');\nvar_dump(\n    T_1, T_2, T_3, T_4, T_5, T_6, T_7, T_8, T_9, T_10,\n    T_11, T_12, T_13, T_14, T_15, T_16, T_17, T_18, T_19, T_20\n);\n?>")).toMatchSnapshot();
  });
});
