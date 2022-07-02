// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/string_to_number_comparison.phpt
  it("String to number comparison", function () {
    expect(parser.parseCode("<?php\n// This tests the examples from the RFC.\nfunction format($val) {\n    if (is_float($val)) {\n        if (is_nan($val)) return \"NAN\";\n        if ($val == INF) return \"INF\";\n        if ($val == -INF) return \"-INF\";\n    }\n    return json_encode($val);\n}\nfunction compare_eq($val1, $val2) {\n    echo format($val1), \" == \", format($val2), \": \", format($val1 == $val2), \"\\n\";\n}\nfunction compare_3way($val1, $val2) {\n    echo format($val1), \" <=> \", format($val2), \": \", format($val1 <=> $val2), \"\\n\";\n}\ncompare_eq(42, \"000042\");\ncompare_eq(42, \"42.0\");\ncompare_eq(42.0, \"+42.0E0\");\ncompare_eq(0, \"0e214987142012\");\necho \"\\n\";\ncompare_eq(\"42\", \"000042\");\ncompare_eq(\"42\", \"42.0\");\ncompare_eq(\"42.0\", \"+42.0E0\");\ncompare_eq(\"0\", \"0e214987142012\");\necho \"\\n\";\ncompare_eq(42, \"   42\");\ncompare_eq(42, \"42   \");\ncompare_eq(42, \"42abc\");\ncompare_eq(42, \"abc42\");\ncompare_eq( 0, \"abc42\");\necho \"\\n\";\ncompare_eq(INF, \"INF\");\ncompare_eq(-INF, \"-INF\");\ncompare_eq(NAN, \"NAN\");\ncompare_eq(INF, \"1e1000\");\ncompare_eq(-INF, \"-1e1000\");\necho \"\\n\";\n$float = 1.75;\necho \"precision=14:\\n\";\nini_set('precision', 14);\ncompare_3way($float, \"1.75abc\");\ncompare_3way((string) $float, \"1.75abc\");\necho \"precision=0:\\n\";\nini_set('precision', 0);\ncompare_3way($float, \"1.75abc\");\ncompare_3way((string) $float, \"1.75abc\");\n?>")).toMatchSnapshot();
  });
});
