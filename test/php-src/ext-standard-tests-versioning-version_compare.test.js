// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/versioning/version_compare.phpt
  it("version_compare test", function () {
    expect(parser.parseCode("<?php\nprint \"TESTING COMPARE\\n\";\n$special_forms = array(\"-dev\", \"a1\", \"b1\", \"RC1\", \"rc1\", \"\", \"pl1\");\n$operators = array(\n    \"lt\", \"<\",\n    \"le\", \"<=\",\n    \"gt\", \">\",\n    \"ge\", \">=\",\n    \"eq\", \"=\", \"==\",\n    \"ne\", \"<>\", \"!=\"\n);\ntest(\"1\", \"2\");\ntest(\"10\", \"2\");\ntest(\"1.0\", \"1.1\");\ntest(\"1.2\", \"1.0.1\");\nforeach ($special_forms as $f1) {\n    foreach ($special_forms as $f2) {\n    test(\"1.0$f1\", \"1.0$f2\");\n    }\n}\nprint \"TESTING OPERATORS\\n\";\nforeach ($special_forms as $f1) {\n    foreach ($special_forms as $f2) {\n        foreach ($operators as $op) {\n            $v1 = \"1.0$f1\";\n            $v2 = \"1.0$f2\";\n            $test = version_compare($v1, $v2, $op) ? \"true\" : \"false\";\n            printf(\"%7s %2s %-7s : %s\\n\", $v1, $op, $v2, $test);\n        }\n    }\n}\nfunction test($v1, $v2) {\n    $compare = version_compare($v1, $v2);\n    switch ($compare) {\n    case -1:\n        print \"$v1 < $v2\\n\";\n        break;\n    case 1:\n        print \"$v1 > $v2\\n\";\n        break;\n    case 0:\n    default:\n        print \"$v1 = $v2\\n\";\n        break;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
