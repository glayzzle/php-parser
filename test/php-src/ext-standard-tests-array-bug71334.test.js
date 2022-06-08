// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug71334.phpt
  it("Bug #71334: Cannot access array keys while uksort()", function () {
    expect(parser.parseCode("<?php\nclass myClass\n{\n    private $a = [\n        'foo-test' => [1],\n        '-' => [2],\n        'bar-test' => [3]\n    ];\n    private function _mySort($x, $y)\n    {\n        if (!isset($this->a[$x])) {\n            throw new Exception('Missing X: \"' . $x . '\"');\n        }\n        if (!isset($this->a[$y])) {\n            throw new Exception('Missing Y: \"' . $y . '\"');\n        }\n        return $x <=> $y;\n    }\n    public function __construct()\n    {\n        uksort($this->a, [$this, '_mySort']);\n    }\n}\nnew myClass();\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
