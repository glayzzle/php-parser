// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_or.phpt
  it("gmp_or() basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_strval(gmp_or(\"111111\", \"2222222\")));\nvar_dump(gmp_strval(gmp_or(123123, 435234)));\nvar_dump(gmp_strval(gmp_or(555, \"2342341123\")));\nvar_dump(gmp_strval(gmp_or(-1, 3333)));\nvar_dump(gmp_strval(gmp_or(4545, -20)));\ntry {\n    var_dump(gmp_strval(gmp_or(\"test\", \"no test\")));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$n = gmp_init(\"987657876543456\");\nvar_dump(gmp_strval(gmp_or($n, \"34332\")));\n$n1 = gmp_init(\"987657878765436543456\");\nvar_dump(gmp_strval(gmp_or($n, $n1)));\ntry {\n    var_dump(gmp_or(array(), 1));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_or(1, array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_or(array(), array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
