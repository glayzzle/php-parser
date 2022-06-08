// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_sign.phpt
  it("gmp_sign() basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_sign(-1));\nvar_dump(gmp_sign(1));\nvar_dump(gmp_sign(0));\nvar_dump(gmp_sign(\"123718235123123\"));\nvar_dump(gmp_sign(\"-34535345345\"));\ntry {\n    var_dump(gmp_sign(\"+34534573457345\"));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    $n = gmp_init(\"098909878976786545\");\n    var_dump(gmp_sign($n));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_sign(array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
