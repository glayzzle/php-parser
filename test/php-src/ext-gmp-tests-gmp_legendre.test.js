// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_legendre.phpt
  it("gmp_legendre() basic tests", function () {
    expect(parser.parseCode("<?php\nfor ($i = -1; $i < 10; $i++) {\n    var_dump(gmp_strval(gmp_legendre(($i*$i)-1, 3)));\n}\nvar_dump(gmp_strval(gmp_legendre(7, 23)));\nvar_dump(gmp_strval(gmp_legendre(\"733535124\", \"1234123423434535623\")));\nvar_dump(gmp_strval(gmp_legendre(3, \"1234123423434535623\")));\n$n = \"123123\";\n$n1 = \"1231231\";\nvar_dump(gmp_strval(gmp_legendre($n, $n1)));\nvar_dump(gmp_strval(gmp_legendre($n, 3)));\nvar_dump(gmp_strval(gmp_legendre(3, $n1)));\ntry {\n    var_dump(gmp_legendre(3, array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_legendre(array(), 3));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_legendre(array(), array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
