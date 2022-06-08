// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78151.phpt
  it("Bug #78151 Segfault caused by indirect expressions in PHP 7.4a1", function () {
    expect(parser.parseCode("<?php\nclass Arr\n{\n    private $foo = '';\n    public function __construct(array $array = [])\n    {\n        $property = 'foo';\n        $this->{$property} = &$array[$property];\n        \\var_dump($this->foo);\n    }\n}\n$arr = new Arr(['foo' => 'bar']);\n?>")).toMatchSnapshot();
  });
});
