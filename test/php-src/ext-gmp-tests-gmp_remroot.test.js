// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_remroot.phpt
  it("gmp_rootrem() basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_rootrem(1000, 3));\nvar_dump(gmp_rootrem(100, 3));\nvar_dump(gmp_rootrem(-100, 3));\nvar_dump(gmp_rootrem(1000, 4));\nvar_dump(gmp_rootrem(100, 4));\ntry {\n    var_dump(gmp_rootrem(-100, 4));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gmp_rootrem(0, 3));\ntry {\n    var_dump(gmp_rootrem(100, 0));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_rootrem(100, -3));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
