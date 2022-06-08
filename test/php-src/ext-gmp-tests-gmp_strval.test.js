// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_strval.phpt
  it("gmp_strval() tests", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(gmp_strval(\"\"));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_strval(\"\", -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$fp = fopen(__FILE__, \"r\");\ntry {\n    var_dump(gmp_strval($fp));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$g = gmp_init(\"9765456\");\nvar_dump(gmp_strval($g));\ntry {\n    var_dump(gmp_strval($g, -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_strval($g, 100000));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gmp_strval($g, 10));\n$g = gmp_init(\"-3373333\");\nvar_dump(gmp_strval($g));\ntry {\n    var_dump(gmp_strval($g, -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_strval($g, 100000));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gmp_strval($g, 10));\ntry {\n    var_dump(gmp_strval(array(1,2)));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_strval(new stdclass));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
