// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/RecursiveIteratorIterator_not_initialized.phpt
  it("Iterating an uninitialized RecursiveIteratorIterator", function () {
    expect(parser.parseCode("<?php\n$rc = new ReflectionClass(RecursiveIteratorIterator::class);\n$it = $rc->newInstanceWithoutConstructor();\ntry {\n    foreach ($it as $v) {}\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
