// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/comparison_invalid.phpt
  it("Invalid comparison with a GMP object", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(\"hapfegfbu\" > gmp_init(0));\n} catch (\\Error $e) {\n    echo $e::class, ': ', $e->getMessage(), \\PHP_EOL;\n}\ntry {\n    var_dump((new DateTime()) > gmp_init(0));\n} catch (\\Error $e) {\n    echo $e::class, ': ', $e->getMessage(), \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
