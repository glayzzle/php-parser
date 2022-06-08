// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug50579.phpt
  it("Bug #50579 (RegexIterator::REPLACE doesn't work)", function () {
    expect(parser.parseCode("<?php\nclass foo extends ArrayIterator {\n    public function __construct( ) {\n        parent::__construct(array(\n        'test1'=>'test888',\n        'test2'=>'what?',\n        'test3'=>'test999'));\n    }\n}\n$h = new foo;\n$i = new RegexIterator($h, '/^test(.*)/', RegexIterator::REPLACE);\n$i->replacement = '[$0]';\nforeach ($i as $name=>$value) {\n    echo $name . '=>' . $value . \"\\n\";\n}\n$i->replacement = '$1';\nforeach ($i as $name=>$value) {\n    echo $name . '=>' . $value . \"\\n\";\n}\n$h = new foo;\n$i = new RegexIterator($h, '/^test(.*)/', RegexIterator::REPLACE);\n$i->replacement = '[$1]';\nforeach ($i as $name=>$value) {\n    echo $name . '=>' . $value . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
