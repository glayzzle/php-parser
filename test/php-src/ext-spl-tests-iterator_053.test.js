// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_053.phpt
  it("SPL: RegexIterator::ALL_MATCHES", function () {
    expect(parser.parseCode("<?php\nclass MyRegexIterator extends RegexIterator\n{\n    public $uk, $re;\n    function __construct($it, $re, $mode, $flags = 0)\n    {\n        $this->uk = $flags & self::USE_KEY;\n        $this->re = $re;\n        parent::__construct($it, $re, $mode, $flags);\n    }\n    function show()\n    {\n        foreach($this as $k => $v)\n        {\n            var_dump($k);\n            var_dump($v);\n        }\n    }\n    function accept(): bool\n    {\n        @preg_match_all($this->re, (string)($this->uk ? $this->key() : $this->current()), $sub);\n        $ret = parent::accept();\n        var_dump($sub == $this->current());\n        return $ret;\n    }\n}\n$ar = new ArrayIterator(array('1','1,2','1,2,3','',NULL,array(),'FooBar',',',',,'));\n$it = new MyRegexIterator($ar, '/(\\d),(\\d)/', RegexIterator::ALL_MATCHES, RegexIterator::USE_KEY);\n$it->show();\n$it = new MyRegexIterator($ar, '/(\\d)/', RegexIterator::ALL_MATCHES, RegexIterator::USE_KEY);\n$it->show();\nvar_dump($ar);\n?>")).toMatchSnapshot();
  });
});
