// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_testbit.phpt
  it("gmp_testbit() basic tests", function () {
    expect(parser.parseCode("<?php\n$n = gmp_init(0);\ntry {\n    var_dump(gmp_testbit($n, -10));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gmp_testbit($n, 0));\nvar_dump(gmp_testbit($n, 1));\nvar_dump(gmp_testbit($n, 100));\n$n = gmp_init(-1);\nvar_dump(gmp_testbit($n, 1));\ntry {\n    var_dump(gmp_testbit($n, -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$n = gmp_init(\"1000000\");\nvar_dump(gmp_testbit($n, 1));\ngmp_setbit($n, 1);\nvar_dump(gmp_testbit($n, 1));\nvar_dump(gmp_strval($n));\ngmp_setbit($n, 5);\nvar_dump(gmp_testbit($n, 5));\nvar_dump(gmp_strval($n));\n$n = gmp_init(\"238462734628347239571823641234\");\nvar_dump(gmp_testbit($n, 5));\ngmp_setbit($n, 5);\nvar_dump(gmp_testbit($n, 5));\nvar_dump(gmp_strval($n));\ngmp_clrbit($n, 5);\nvar_dump(gmp_testbit($n, 5));\nvar_dump(gmp_strval($n));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
