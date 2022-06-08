// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_scan0.phpt
  it("gmp_scan0() basic tests", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(gmp_scan0(\"434234\", -10));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gmp_scan0(\"434234\", 1));\nvar_dump(gmp_scan0(4096, 0));\nvar_dump(gmp_scan0(\"1000000000\", 5));\nvar_dump(gmp_scan0(\"1000000000\", 200));\n$n = gmp_init(\"24234527465274\");\nvar_dump(gmp_scan0($n, 10));\ntry {\n    var_dump(gmp_scan0(array(), 200));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
