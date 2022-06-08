// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/iterable_005.phpt
  it("iterable type#005 - Return type covariance", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    function method(): iterable {\n        return [];\n    }\n}\nclass TestArray extends Test {\n    function method(): array {\n        return [];\n    }\n}\nclass TestTraversable extends Test {\n    function method(): Traversable {\n        return new ArrayIterator([]);\n    }\n}\nclass TestScalar extends Test {\n    function method(): int {\n        return 1;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
