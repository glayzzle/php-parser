// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_div_q.phpt
  it("gmp_div_q() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_div_q(0,1));\ntry {\n    var_dump(gmp_div_q(1, 0));\n} catch (\\DivisionByZeroError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gmp_div_q(12653,23482734));\ntry {\n    var_dump(gmp_div_q(12653,23482734, 10));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gmp_div_q(1123123,123));\nvar_dump(gmp_div_q(1123123,123, 1));\nvar_dump(gmp_div_q(1123123,123, 2));\nvar_dump(gmp_div_q(1123123,123, GMP_ROUND_ZERO));\nvar_dump(gmp_div_q(1123123,123, GMP_ROUND_PLUSINF));\nvar_dump(gmp_div_q(1123123,123, GMP_ROUND_MINUSINF));\n$fp = fopen(__FILE__, 'r');\ntry {\n    var_dump(gmp_div_q($fp, $fp));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_div_q(array(), array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
