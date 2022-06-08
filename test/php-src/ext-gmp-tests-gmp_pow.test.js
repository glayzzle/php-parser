// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_pow.phpt
  it("gmp_pow() basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_strval(gmp_pow(2,10)));\nvar_dump(gmp_strval(gmp_pow(-2,10)));\nvar_dump(gmp_strval(gmp_pow(-2,11)));\nvar_dump(gmp_strval(gmp_pow(\"2\",10)));\nvar_dump(gmp_strval(gmp_pow(\"2\",0)));\ntry {\n    gmp_pow(\"2\", -1);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump(gmp_strval(gmp_pow(\"-2\",10)));\nvar_dump(gmp_strval(gmp_pow(20,10)));\nvar_dump(gmp_strval(gmp_pow(50,10)));\ntry {\n    gmp_pow(50,-5);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$n = gmp_init(\"20\");\nvar_dump(gmp_strval(gmp_pow($n,10)));\n$n = gmp_init(\"-20\");\nvar_dump(gmp_strval(gmp_pow($n,10)));\ntry {\n    var_dump(gmp_pow(2,array()));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(gmp_pow(array(),10));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
