// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug54304.phpt
  it("Bug #54304 (Setting replacement value for RegexIterator doesn't work)", function () {
    expect(parser.parseCode("<?php\nclass foo extends ArrayIterator {\n    public function __construct( ) {\n        parent::__construct(array(\n            'test3'=>'test999'));\n    }\n}\n$h = new foo;\n$i = new RegexIterator($h, '/^test(.*)/', RegexIterator::REPLACE);\n$i->replacement = \"42\";\nvar_dump($i->replacement);\nforeach ($i as $name=>$value) {\n    var_dump($name, $value);\n}\nvar_dump($i->replacement);\n?>")).toMatchSnapshot();
  });
});
