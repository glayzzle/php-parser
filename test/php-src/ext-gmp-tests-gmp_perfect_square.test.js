// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_perfect_square.phpt
  it("gmp_perfect_square() basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_perfect_square(0));\nvar_dump(gmp_perfect_square(\"0\"));\nvar_dump(gmp_perfect_square(-1));\nvar_dump(gmp_perfect_square(1));\nvar_dump(gmp_perfect_square(16));\nvar_dump(gmp_perfect_square(17));\nvar_dump(gmp_perfect_square(\"1000000\"));\nvar_dump(gmp_perfect_square(\"1000001\"));\n$n = gmp_init(100101);\nvar_dump(gmp_perfect_square($n));\n$n = gmp_init(64);\nvar_dump(gmp_perfect_square($n));\n$n = gmp_init(-5);\nvar_dump(gmp_perfect_square($n));\ntry {\n    var_dump(gmp_perfect_square(array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
