// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/ArrayObject__serialize_saves_iterator_class.phpt
  it("ArrayObject::__serialize saves any iterator class set by ::setIteratorClass", function () {
    expect(parser.parseCode("<?php\nclass MyArrayIterator extends ArrayIterator {}\n$arrayObject = new ArrayObject(array(1, 2, 3));\n$arrayObject->setIteratorClass(\"MyArrayIterator\");\n$serialized = serialize($arrayObject);\n$backAgain  = unserialize($serialized);\necho $backAgain->getIteratorClass(), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
