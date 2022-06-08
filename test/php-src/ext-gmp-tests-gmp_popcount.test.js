// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_popcount.phpt
  it("gmp_popcount() basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_popcount(-1));\nvar_dump(gmp_popcount(0));\nvar_dump(gmp_popcount(12123));\nvar_dump(gmp_popcount(\"52638927634234\"));\nvar_dump(gmp_popcount(\"-23476123423433\"));\n$n = gmp_init(\"9876546789222\");\nvar_dump(gmp_popcount($n));\ntry {\n    var_dump(gmp_popcount(array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
