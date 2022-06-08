// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_and.phpt
  it("gmp_and() basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_strval(gmp_and(\"111111\", \"2222222\")));\nvar_dump(gmp_strval(gmp_and(123123, 435234)));\nvar_dump(gmp_strval(gmp_and(555, \"2342341123\")));\nvar_dump(gmp_strval(gmp_and(-1, 3333)));\nvar_dump(gmp_strval(gmp_and(4545, -20)));\ntry {\n    var_dump(gmp_strval(gmp_and(\"test\", \"no test\")));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$n = gmp_init(\"987657876543456\");\nvar_dump(gmp_strval(gmp_and($n, \"34332\")));\n$n1 = gmp_init(\"987657878765436543456\");\nvar_dump(gmp_strval(gmp_and($n, $n1)));\ntry {\n    var_dump(gmp_and(array(), 1));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_and(1, array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_and(array(), array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
