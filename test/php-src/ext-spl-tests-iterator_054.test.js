// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_054.phpt
  it("SPL: RegexIterator::SPLIT", function () {
    expect(parser.parseCode("<?php\nclass MyRegexIterator extends RegexIterator\n{\n    function show()\n    {\n        foreach($this as $k => $v)\n        {\n            var_dump($k);\n            var_dump($v);\n        }\n    }\n}\n$ar = new ArrayIterator(array('1','1,2','1,2,3','',NULL,array(),'FooBar',',',',,'));\n$it = new MyRegexIterator($ar, '/,/', RegexIterator::SPLIT);\n$it->show();\nvar_dump($ar);\n?>")).toMatchSnapshot();
  });
});
