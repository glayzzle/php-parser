// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_mod.phpt
  it("gmp_mod tests()", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(gmp_mod(\"\",\"\"));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gmp_mod(0,1));\nvar_dump(gmp_mod(0,-1));\ntry {\n    var_dump(gmp_mod(-1,0));\n} catch (\\DivisionByZeroError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_mod(array(), array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$a = gmp_init(\"-100000000\");\n$b = gmp_init(\"353467\");\nvar_dump(gmp_mod($a, $b));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
