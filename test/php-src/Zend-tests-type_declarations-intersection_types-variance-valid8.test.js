// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/variance/valid8.phpt
  it("Replacing iterable type with intersection type", function () {
    expect(parser.parseCode("<?php\nabstract class MyIterator implements Traversable {}\nclass Test {\n    function method(): iterable {}\n    function method2(): iterable|int {}\n    function method3(): iterable|Z {}\n}\nclass Test2 extends Test {\n    function method(): X&Traversable {}\n    function method2(): X&MyIterator {}\n    function method3(): X&Z {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
