// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_empty_loop_leak.phpt
  it("Empty foreach loops with exception must not leak", function () {
    expect(parser.parseCode("<?php\nclass Foo implements IteratorAggregate {\n    public function getIterator(): Traversable {\n        return new ArrayIterator([]);\n    }\n    public function __destruct() {\n        throw new Exception;\n    }\n}\ntry {\n    foreach (new Foo as $x);\n} catch (Exception $e) {\n    echo \"Exception caught\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
