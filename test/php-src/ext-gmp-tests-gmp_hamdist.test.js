// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_hamdist.phpt
  it("gmp_hamdist() basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_hamdist(1231231, 0));\nvar_dump(gmp_hamdist(1231231, -1));\nvar_dump(gmp_hamdist(1231231, \"8765434567897654333334567\"));\nvar_dump(gmp_hamdist(-364264234, \"8333765434567897654333334567\"));\n$n = gmp_init(\"8765434567\");\n$n1 = gmp_init(\"987654445678\");\nvar_dump(gmp_hamdist($n, \"8333765434567897654333334567\"));\nvar_dump(gmp_hamdist($n, $n));\nvar_dump(gmp_hamdist($n, $n1));\ntry {\n    var_dump(gmp_hamdist($n, array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_hamdist(array(), $n));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_hamdist(array(), array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
