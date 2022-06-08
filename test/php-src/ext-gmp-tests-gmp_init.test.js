// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_init.phpt
  it("gmp_init() basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_init(\"98765678\"));\nvar_dump(gmp_strval(gmp_init(\"98765678\")));\ntry {\n    var_dump(gmp_init(1,-1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_init(\"\",36));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_init(\"foo\",3));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_strval(gmp_init(\"993247326237679187178\",3)));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
