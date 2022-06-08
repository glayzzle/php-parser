// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug68128.phpt
  it("Bug #68128 - RecursiveRegexIterator raises \"Array to string conversion\" notice", function () {
    expect(parser.parseCode("<?php\n$array = new ArrayIterator(array('a', array('b', 'c')));\n$regex = new RegexIterator($array, '/Array/');\nforeach ($regex as $match) {\n    var_dump($match);\n}\n$rArrayIterator = new RecursiveArrayIterator(array('test1', array('tet3', 'test4', 'test5')));\n$rRegexIterator = new RecursiveRegexIterator($rArrayIterator, '/^(t)est(\\d*)/',\n    RecursiveRegexIterator::ALL_MATCHES, 0, PREG_PATTERN_ORDER);\nforeach ($rRegexIterator as $key1 => $value1) {\n    if ($rRegexIterator->hasChildren()) {\n        // print all children\n        echo \"Children: \";\n        foreach ($rRegexIterator->getChildren() as $key => $value) {\n            print_r($value);\n        }\n        echo \"\\n\";\n    } else {\n        echo \"No children \";\n        print_r($value1);\n        echo \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
