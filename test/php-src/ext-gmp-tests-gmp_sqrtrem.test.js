// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_sqrtrem.phpt
  it("gmp_sqrtrem() basic tests", function () {
    expect(parser.parseCode("<?php\ntry {\n    $r = gmp_sqrtrem(-1);\n    var_dump($r);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$r = gmp_sqrtrem(\"0\");\nvar_dump(gmp_strval($r[0]));\nvar_dump(gmp_strval($r[1]));\n$r = gmp_sqrtrem(2);\nvar_dump(gmp_strval($r[0]));\nvar_dump(gmp_strval($r[1]));\n$r = gmp_sqrtrem(10);\nvar_dump(gmp_strval($r[0]));\nvar_dump(gmp_strval($r[1]));\n$r = gmp_sqrtrem(7);\nvar_dump(gmp_strval($r[0]));\nvar_dump(gmp_strval($r[1]));\n$r = gmp_sqrtrem(3);\nvar_dump(gmp_strval($r[0]));\nvar_dump(gmp_strval($r[1]));\n$r = gmp_sqrtrem(100000);\nvar_dump(gmp_strval($r[0]));\nvar_dump(gmp_strval($r[1]));\n$r = gmp_sqrtrem(\"1000000\");\nvar_dump(gmp_strval($r[0]));\nvar_dump(gmp_strval($r[1]));\n$r = gmp_sqrtrem(\"1000001\");\nvar_dump(gmp_strval($r[0]));\nvar_dump(gmp_strval($r[1]));\ntry {\n    $n = gmp_init(-1);\n    $r = gmp_sqrtrem($n);\n    var_dump($r);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$n = gmp_init(1000001);\n$r = gmp_sqrtrem($n);\nvar_dump(gmp_strval($r[0]));\nvar_dump(gmp_strval($r[1]));\ntry {\n    var_dump(gmp_sqrtrem(array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
