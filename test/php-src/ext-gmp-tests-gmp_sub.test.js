// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_sub.phpt
  it("gmp_sub() tests", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(gmp_sub(\"\", \"\"));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_sub(array(), array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump($g = gmp_sub(10000, 10001));\nvar_dump(gmp_strval($g));\nvar_dump($g = gmp_sub(10000, -1));\nvar_dump(gmp_strval($g));\ntry {\n    var_dump($g = gmp_sub(10000, new stdclass));\n    var_dump(gmp_strval($g));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump($g = gmp_sub(new stdclass, 100));\n    var_dump(gmp_strval($g));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
