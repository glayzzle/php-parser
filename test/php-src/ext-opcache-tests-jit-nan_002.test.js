// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/nan_002.phpt
  it("NaN handling: 002", function () {
    expect(parser.parseCode("<?php\nfunction test(float $a) {\n    if ($a) var_dump(\"1\");\n    if (!$a) var_dump(\"2\");    \n    var_dump((bool) $a);\n    var_dump(!$a);\n    echo \"\\n\";\n}\nfunction test1(float $a, bool $b) {\n    var_dump($a && $b); //JMPNZ_EX \n}\nfunction test2(float $a, bool $b) {\n    var_dump($a || $b); // JMPZ_EX\n}\ntest(NAN);\ntest(1.0);\ntest(0.0);\ntest1(NAN, true);\ntest1(1.0, true);\ntest1(0.0, true);\necho \"\\n\";\ntest2(NAN, false);\ntest2(1.0, false);\ntest2(0.0, false);\n?>")).toMatchSnapshot();
  });
});
