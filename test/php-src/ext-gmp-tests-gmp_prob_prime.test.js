// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_prob_prime.phpt
  it("gmp_prob_prime() basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_prob_prime(10));\nvar_dump(gmp_prob_prime(\"7\"));\nvar_dump(gmp_prob_prime(17));\nvar_dump(gmp_prob_prime(-31));\nvar_dump(gmp_prob_prime(\"172368715471481723\"));\nvar_dump(gmp_prob_prime(10));\nvar_dump(gmp_prob_prime(\"7\"));\nvar_dump(gmp_prob_prime(17));\nvar_dump(gmp_prob_prime(-31));\nvar_dump(gmp_prob_prime(\"172368715471481723\"));\nfor ($i = -1; $i < 12; $i++) {\n    var_dump(gmp_prob_prime((773*$i)-($i*7)-1, $i));\n    $n = gmp_init(\"23476812735411\");\n    var_dump(gmp_prob_prime(gmp_add($n, $i-1), $i));\n}\n$n = gmp_init(\"19481923\");\nvar_dump(gmp_prob_prime($n));\n$n = gmp_init(0);\nvar_dump(gmp_prob_prime($n));\ntry {\n    var_dump(gmp_prob_prime(array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
