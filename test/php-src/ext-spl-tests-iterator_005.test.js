// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_005.phpt
  it("SPL: IteratorIterator and ArrayIterator/Object", function () {
    expect(parser.parseCode("<?php\nclass ArrayIteratorEx extends ArrayIterator\n{\n    function rewind(): void\n    {\n        echo __METHOD__ . \"\\n\";\n        parent::rewind();\n    }\n}\n$it = new ArrayIteratorEx(range(0,3));\nforeach(new IteratorIterator($it) as $v)\n{\n    var_dump($v);\n}\nclass ArrayObjectEx extends ArrayObject\n{\n    function getIterator(): Iterator\n    {\n        echo __METHOD__ . \"\\n\";\n        return parent::getIterator();\n    }\n}\n$it = new ArrayObjectEx(range(0,3));\nforeach(new IteratorIterator($it) as $v)\n{\n    var_dump($v);\n}\n?>")).toMatchSnapshot();
  });
});
