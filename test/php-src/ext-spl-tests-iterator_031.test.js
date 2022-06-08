// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_031.phpt
  it("SPL: AppendIterator::append() rewinds when necessary", function () {
    expect(parser.parseCode("<?php\nclass MyArrayIterator extends ArrayIterator\n{\n    function rewind(): void\n    {\n        echo __METHOD__ . \"\\n\";\n        parent::rewind();\n    }\n}\n$it = new MyArrayIterator(array(1,2));\nforeach($it as $k=>$v)\n{\n    echo \"$k=>$v\\n\";\n}\nclass MyAppendIterator extends AppendIterator\n{\n    function __construct()\n    {\n        echo __METHOD__ . \"\\n\";\n    }\n    function rewind(): void\n    {\n        echo __METHOD__ . \"\\n\";\n        parent::rewind();\n    }\n    function valid(): bool\n    {\n        echo __METHOD__ . \"\\n\";\n        return parent::valid();\n    }\n    function append(Iterator $what): void\n    {\n        echo __METHOD__ . \"\\n\";\n        parent::append($what);\n    }\n    function parent__construct()\n    {\n        parent::__construct();\n    }\n}\n$ap = new MyAppendIterator;\ntry\n{\n    $ap->append($it);\n}\ncatch(\\Error $e)\n{\n    echo $e->getMessage() . \"\\n\";\n}\n$ap->parent__construct();\ntry\n{\n    $ap->parent__construct($it);\n}\ncatch(BadMethodCallException $e)\n{\n    echo $e->getMessage() . \"\\n\";\n}\n$ap->append($it);\n$ap->append($it);\n$ap->append($it);\nforeach($ap as $k=>$v)\n{\n    echo \"$k=>$v\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
