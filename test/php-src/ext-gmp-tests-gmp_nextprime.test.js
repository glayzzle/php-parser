// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_nextprime.phpt
  it("gmp_nextprime()", function () {
    expect(parser.parseCode("<?php\n$n = gmp_nextprime(-1);\nvar_dump(gmp_strval($n));\n$n = gmp_nextprime(0);\nvar_dump(gmp_strval($n));\n$n = gmp_nextprime(-1000);\nvar_dump(gmp_strval($n));\n$n = gmp_nextprime(1000);\nvar_dump(gmp_strval($n));\n$n = gmp_nextprime(100000);\nvar_dump(gmp_strval($n));\ntry {\n    $n = gmp_nextprime(array());\n    var_dump(gmp_strval($n));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    $n = gmp_nextprime(\"\");\n    var_dump(gmp_strval($n));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    $n = gmp_nextprime(new stdclass());\n    var_dump(gmp_strval($n));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
