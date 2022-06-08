// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_sqrt.phpt
  it("gmp_sqrt() basic tests", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(gmp_strval(gmp_sqrt(-2)));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_strval(gmp_sqrt(\"-2\")));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gmp_strval(gmp_sqrt(\"0\")));\nvar_dump(gmp_strval(gmp_sqrt(\"2\")));\nvar_dump(gmp_strval(gmp_sqrt(\"144\")));\n$n = gmp_init(0);\nvar_dump(gmp_strval(gmp_sqrt($n)));\n$n = gmp_init(-144);\ntry {\n    var_dump(gmp_strval(gmp_sqrt($n)));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$n = gmp_init(777);\nvar_dump(gmp_strval(gmp_sqrt($n)));\ntry {\n    var_dump(gmp_sqrt(array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
