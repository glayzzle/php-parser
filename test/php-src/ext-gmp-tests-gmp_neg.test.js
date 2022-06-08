// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_neg.phpt
  it("gmp_neg() basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_intval(gmp_neg(0)));\nvar_dump(gmp_intval(gmp_neg(1)));\nvar_dump(gmp_intval(gmp_neg(-1)));\nvar_dump(gmp_intval(gmp_neg(\"-1\")));\ntry {\n    var_dump(gmp_intval(gmp_neg(\"\")));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gmp_intval(gmp_neg(0)));\n$n = gmp_init(\"0\");\nvar_dump(gmp_intval(gmp_neg($n)));\n$n = gmp_init(\"12345678901234567890\");\nvar_dump(gmp_strval(gmp_neg($n)));\ntry {\n    var_dump(gmp_neg(array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
