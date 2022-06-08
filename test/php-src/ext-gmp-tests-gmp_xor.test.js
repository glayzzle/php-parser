// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_xor.phpt
  it("gmp_xor() basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_strval(gmp_xor(\"111111\", \"2222222\")));\nvar_dump(gmp_strval(gmp_xor(123123, 435234)));\nvar_dump(gmp_strval(gmp_xor(555, \"2342341123\")));\nvar_dump(gmp_strval(gmp_xor(-1, 3333)));\nvar_dump(gmp_strval(gmp_xor(4545, -20)));\ntry {\n    var_dump(gmp_strval(gmp_xor(\"test\", \"no test\")));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$n = gmp_init(\"987657876543456\");\nvar_dump(gmp_strval(gmp_xor($n, \"34332\")));\n$n1 = gmp_init(\"987657878765436543456\");\nvar_dump(gmp_strval(gmp_xor($n, $n1)));\ntry {\n    var_dump(gmp_xor(array(), 1));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_xor(1, array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_xor(array(), array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
