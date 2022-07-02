// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/generators005.phpt
  it("Return type covariance works with generators", function () {
    expect(parser.parseCode("<?php\ninterface Collection extends IteratorAggregate {\n    function getIterator(): Iterator;\n}\nclass SomeCollection implements Collection {\n    function getIterator(): Iterator {\n        foreach ($this->data as $key => $value) {\n            yield $key => $value;\n        }\n    }\n}\n$some = new SomeCollection();\nvar_dump($some->getIterator());\n?>")).toMatchSnapshot();
  });
});
