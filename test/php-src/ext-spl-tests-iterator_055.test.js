// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_055.phpt
  it("SPL: RegexIterator::SPLIT, USE_KEY", function () {
    expect(parser.parseCode("<?php\nclass MyRegexIterator extends RegexIterator\n{\n    function show()\n    {\n        foreach($this as $k => $v)\n        {\n            var_dump($k);\n            var_dump($v);\n        }\n    }\n}\n$ar = new ArrayIterator(array('1'=>0,'1,2'=>1,'1,2,3'=>2,0=>3,'FooBar'=>4,','=>5,',,'=>6));\n$it = new MyRegexIterator($ar, '/(\\d),(\\d)/', RegexIterator::SPLIT, RegexIterator::USE_KEY);\n$it->show();\nvar_dump($ar);\n?>")).toMatchSnapshot();
  });
});
