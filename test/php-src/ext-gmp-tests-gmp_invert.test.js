// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_invert.phpt
  it("gmp_invert() basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_strval(gmp_invert(123123,5467624)));\nvar_dump(gmp_strval(gmp_invert(123123,\"3333334345467624\")));\nvar_dump(gmp_strval(gmp_invert(\"12312323213123123\",7624)));\ntry {\n    var_dump(gmp_strval(gmp_invert(444,0)));\n} catch (\\DivisionByZeroError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gmp_strval(gmp_invert(0,28347)));\nvar_dump(gmp_strval(gmp_invert(-12,456456)));\nvar_dump(gmp_strval(gmp_invert(234234,-435345)));\n$n = gmp_init(\"349827349623423452345\");\n$n1 = gmp_init(\"3498273496234234523451\");\nvar_dump(gmp_strval(gmp_invert($n, $n1)));\nvar_dump(gmp_strval(gmp_invert($n1, $n)));\ntry {\n    var_dump(gmp_invert(array(), 1));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_invert(1, array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_invert(array(), array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
