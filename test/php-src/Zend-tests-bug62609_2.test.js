// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug62609_2.phpt
  it("Bug #62609: Allow implementing Traversable on abstract classes (work)", function () {
    expect(parser.parseCode("<?php\nabstract class AbstractTraversable implements Traversable {}\nclass NonAbstractTraversable extends AbstractTraversable implements IteratorAggregate {\n    public function getIterator(): Traversable {\n        yield \"foo\";\n        yield \"bar\";\n    }\n}\nforeach (new NonAbstractTraversable as $value) {\n    echo $value, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
