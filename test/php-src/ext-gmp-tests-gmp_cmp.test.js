// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_cmp.phpt
  it("gmp_cmp() basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_cmp(123123,-123123));\nvar_dump(gmp_cmp(\"12345678900987654321\",\"12345678900987654321\"));\nvar_dump(gmp_cmp(\"12345678900987654321\",\"123456789009876543211\"));\nvar_dump(gmp_cmp(0,0));\nvar_dump(gmp_cmp(1231222,0));\nvar_dump(gmp_cmp(0,345355));\n$n = gmp_init(\"827278512385463739\");\nvar_dump(gmp_cmp(0,$n) < 0);\n$n1 = gmp_init(\"827278512385463739\");\nvar_dump(gmp_cmp($n1,$n));\ntry {\n    var_dump(gmp_cmp(array(),array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
