// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_setbit.phpt
  it("gmp_setbit() basic tests", function () {
    expect(parser.parseCode("<?php\n$n = gmp_init(-1);\ngmp_setbit($n, 10, -1);\nvar_dump(gmp_strval($n));\n$n = gmp_init(5);\ntry {\n    gmp_setbit($n, -20, 0);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gmp_strval($n));\n$n = gmp_init(5);\ngmp_setbit($n, 2, 0);\nvar_dump(gmp_strval($n));\n$n = gmp_init(5);\ngmp_setbit($n, 1, 1);\nvar_dump(gmp_strval($n));\n$n = gmp_init(\"100000000000\");\ngmp_setbit($n, 23, 1);\nvar_dump(gmp_strval($n));\ngmp_setbit($n, 23, 0);\nvar_dump(gmp_strval($n));\ngmp_setbit($n, 3);\nvar_dump(gmp_strval($n));\n$b = \"\";\ntry {\n    gmp_setbit($b, 23);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$a = array();\ntry {\n    gmp_setbit($a, array());\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
