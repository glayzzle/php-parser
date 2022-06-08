// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_divexact.phpt
  it("gmp_divexact() tests", function () {
    expect(parser.parseCode("<?php\n$r = gmp_divexact(\"233\", \"23345555555555555555555555\");\nvar_dump(gmp_strval($r));\ntry {\n    $r = gmp_divexact(\"233\", \"0\");\n    var_dump(gmp_strval($r));\n} catch (\\DivisionByZeroError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$r = gmp_divexact(\"100\", \"10\");\nvar_dump(gmp_strval($r));\n$r = gmp_divexact(\"1024\", \"2\");\nvar_dump(gmp_strval($r));\n$n = gmp_init(\"10000000000000000000\");\n$r = gmp_divexact($n, \"2\");\nvar_dump(gmp_strval($r));\n$r = gmp_divexact($n, \"50\");\nvar_dump(gmp_strval($r));\n$n1 = gmp_init(\"-100000000000000000000000000\");\n$r = gmp_divexact($n1, $n);\nvar_dump(gmp_strval($r));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
