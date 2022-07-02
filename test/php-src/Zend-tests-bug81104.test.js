// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug81104.phpt
  it("Bug #81104: Warning: \"Failed to set memory limit to ... bytes\" emitted after exit in debug", function () {
    expect(parser.parseCode("<?php\nclass X {\n    public $x;\n    public function __construct() { $this->x = [$this]; }\n}\ngc_disable();\nini_set('memory_limit', '10M');\n$y = [];\nfor ($i = 0; $i < 10000; $i++) {\n    $y[] = new X();\n}\n$y[0]->y = &$y;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
