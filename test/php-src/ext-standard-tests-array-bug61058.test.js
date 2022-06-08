// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug61058.phpt
  it("Bug #61058 (array_fill leaks if start index is PHP_INT_MAX)", function () {
    expect(parser.parseCode("<?php\ntry {\n    array_fill(PHP_INT_MAX, 2, '*');\n} catch (\\Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
