// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_015.phpt
  it("SPL: RecursiveIteratorIterator and beginChildren/endChildren", function () {
    expect(parser.parseCode("<?php\nclass RecursiveArrayIteratorIterator extends RecursiveIteratorIterator\n{\n    function rewind(): void\n    {\n        echo \"<ul>\\n\";\n        parent::rewind();\n    }\n    function beginChildren(): void\n    {\n        echo str_repeat('  ',$this->getDepth()).\"<ul>\\n\";\n    }\n    function endChildren(): void\n    {\n        echo str_repeat('  ',$this->getDepth()).\"</ul>\\n\";\n    }\n    function valid(): bool\n    {\n        if (!parent::valid()) {\n            echo \"<ul>\\n\";\n            return false;\n        }\n        return true;\n    }\n}\n$arr = array(\"a\", array(\"ba\", array(\"bba\", \"bbb\"), array(array(\"bcaa\"))), array(\"ca\"), \"d\");\n$obj = new RecursiveArrayIterator($arr);\n$rit = new RecursiveArrayIteratorIterator($obj);\nforeach($rit as $k=>$v)\n{\n    echo str_repeat('  ',$rit->getDepth()+1).\"$k=>$v\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
