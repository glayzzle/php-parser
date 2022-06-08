// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_clrbit.phpt
  it("gmp_clrbit() basic tests", function () {
    expect(parser.parseCode("<?php\n$n = gmp_init(0);\ngmp_clrbit($n, 0);\nvar_dump(gmp_strval($n));\n$n = gmp_init(-1);\ntry {\n    gmp_clrbit($n, -1);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gmp_strval($n));\n$n = gmp_init(\"1000000\");\ntry {\n    gmp_clrbit($n, -1);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gmp_strval($n));\n$n = gmp_init(\"1000000\");\ngmp_clrbit($n, 3);\nvar_dump(gmp_strval($n));\n$n = gmp_init(\"238462734628347239571823641234\");\ngmp_clrbit($n, 3);\ngmp_clrbit($n, 5);\ngmp_clrbit($n, 20);\nvar_dump(gmp_strval($n));\n$n = array();\ntry {\n    gmp_clrbit($n, 3);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
