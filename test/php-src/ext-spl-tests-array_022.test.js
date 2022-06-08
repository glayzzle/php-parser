// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_022.phpt
  it("SPL: ArrayObject/Iterator and reference to self", function () {
    expect(parser.parseCode("==ArrayObject===\n<?php\nclass MyArrayObject extends ArrayObject\n{\n    public function __construct()\n    {\n        parent::__construct($this);\n        $this['bar'] = 'baz';\n    }\n}\n$a = new MyArrayObject;\n$b = clone $a;\n$b['baz'] = 'Foo';\nvar_dump($a);\nvar_dump($b);\n?>\n==ArrayIterator===\n<?php\nclass MyArrayIterator extends ArrayIterator\n{\n    public function __construct()\n    {\n        parent::__construct($this);\n        $this['bar'] = 'baz';\n    }\n}\n$a = new MyArrayIterator;\n$b = clone $a;\n$b['baz'] = 'Foo';\nvar_dump($a);\nvar_dump($b);\n?>")).toMatchSnapshot();
  });
});
