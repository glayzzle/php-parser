// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60161.phpt
  it("Bug #60161: Implementing an interface extending Traversable is order dependent", function () {
    expect(parser.parseCode("<?php\ninterface Foo extends Traversable {\n}\nclass Example implements Foo, IteratorAggregate {\n    public function getIterator(): Traversable {\n        return new ArrayIterator([]);\n    }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
