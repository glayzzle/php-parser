// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_fact.phpt
  it("gmp_fact() basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_strval(gmp_fact(0)));\ntry {\n    var_dump(gmp_strval(gmp_fact(\"\")));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gmp_strval(gmp_fact(\"0\")));\ntry {\n    var_dump(gmp_strval(gmp_fact(\"-1\")));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_strval(gmp_fact(-1)));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gmp_strval(gmp_fact(20)));\nvar_dump(gmp_strval(gmp_fact(\"50\")));\nvar_dump(gmp_strval(gmp_fact(\"10\")));\nvar_dump(gmp_strval(gmp_fact(\"0000\")));\n$n = gmp_init(12);\nvar_dump(gmp_strval(gmp_fact($n)));\n$n = gmp_init(-10);\ntry {\n    var_dump(gmp_strval(gmp_fact($n)));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_fact(array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
