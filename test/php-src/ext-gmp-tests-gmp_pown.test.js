// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_pown.phpt
  it("gmp_powm() basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_strval(gmp_powm(0,1,10)));\nvar_dump(gmp_strval(gmp_powm(5,1,10)));\nvar_dump(gmp_strval(gmp_powm(-5,1,-10)));\nvar_dump(gmp_strval(gmp_powm(-5,1,10)));\nvar_dump(gmp_strval(gmp_powm(-5,11,10)));\nvar_dump(gmp_strval(gmp_powm(\"77\",3,1000)));\n$n = gmp_init(11);\nvar_dump(gmp_strval(gmp_powm($n,3,1000)));\n$e = gmp_init(7);\nvar_dump(gmp_strval(gmp_powm($n,$e,1000)));\n$m = gmp_init(900);\nvar_dump(gmp_strval(gmp_powm($n,$e,$m)));\ntry {\n    var_dump(gmp_powm(5, 11, 0));\n} catch (\\DivisionByZeroError $error) {\n    echo $error->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_powm(5, \"11\", gmp_init(0)));\n} catch (\\DivisionByZeroError $error) {\n    echo $error->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_powm(array(),$e,$m));\n} catch (\\TypeError $error) {\n    echo $error->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_powm($n,array(),$m));\n} catch (\\TypeError $error) {\n    echo $error->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_powm($n,$error,array()));\n} catch (\\TypeError $error) {\n    echo $error->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_powm(array(),array(),array()));\n} catch (\\TypeError $error) {\n    echo $error->getMessage() . \\PHP_EOL;\n}\ntry {\n    $n = gmp_init(\"-5\");\n    var_dump(gmp_powm(10, $n, 10));\n} catch (\\ValueError $error) {\n    echo $error->getMessage() . \\PHP_EOL;\n}\n$n = gmp_init(\"0\");\nvar_dump(gmp_powm(10, $n, 10));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
