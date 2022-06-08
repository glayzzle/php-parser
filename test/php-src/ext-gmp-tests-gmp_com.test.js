// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_com.phpt
  it("gmp_com() basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_strval(gmp_com(0)));\nvar_dump(gmp_strval(gmp_com(\"0\")));\ntry {\n    var_dump(gmp_strval(gmp_com(\"test\")));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gmp_strval(gmp_com(\"2394876545678\")));\nvar_dump(gmp_strval(gmp_com(\"-111\")));\nvar_dump(gmp_strval(gmp_com(874653)));\nvar_dump(gmp_strval(gmp_com(-9876)));\n$n = gmp_init(\"98765467\");\nvar_dump(gmp_strval(gmp_com($n)));\n$n = gmp_init(\"98765463337\");\nvar_dump(gmp_strval(gmp_com($n)));\ntry {\n    var_dump(gmp_strval(gmp_com(array())));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
