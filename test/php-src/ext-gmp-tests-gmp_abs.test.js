// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_abs.phpt
  it("gmp_abs() basic tests", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(gmp_strval(gmp_abs(\"\")));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gmp_strval(gmp_abs(\"0\")));\nvar_dump(gmp_strval(gmp_abs(0)));\ntry {\n    var_dump(gmp_strval(gmp_abs(-111111111111111111111))); // This is a float\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gmp_strval(gmp_abs(\"111111111111111111111\")));\nvar_dump(gmp_strval(gmp_abs(\"-111111111111111111111\")));\nvar_dump(gmp_strval(gmp_abs(\"0000\")));\ntry {\n    // Base 8\n    var_dump(gmp_strval(gmp_abs(\"09876543\")));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    // Base 8\n    var_dump(gmp_strval(gmp_abs(\"-099987654\")));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_abs(array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
