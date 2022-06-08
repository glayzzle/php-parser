// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_019.phpt
  it("SPL: ArrayIterator and foreach by reference", function () {
    expect(parser.parseCode("<?php\n$ar = new ArrayObject(array(1));            foreach($ar as &$v) var_dump($v);\n$ar = new ArrayIterator(array(2));          foreach($ar as &$v) var_dump($v);\n$ar = new RecursiveArrayIterator(array(3)); foreach($ar as &$v) var_dump($v);\nclass ArrayIteratorEx extends ArrayIterator\n{\n    function current(): mixed\n    {\n        return ArrayIterator::current();\n    }\n}\n$ar = new ArrayIteratorEx(array(4)); foreach($ar as $v) var_dump($v);\n$ar = new ArrayIteratorEx(array(5)); foreach($ar as &$v) var_dump($v);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
