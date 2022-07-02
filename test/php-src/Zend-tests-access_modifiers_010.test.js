// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/access_modifiers_010.phpt
  it("Testing visibility of methods", function () {
    expect(parser.parseCode("<?php\nclass d {\n    private function test2() {\n        print \"Bar\\n\";\n    }\n}\nabstract class a extends d {\n    public function test() {\n        $this->test2();\n    }\n}\nabstract class b extends a {\n}\nclass c extends b {\n    public function __construct() {\n        $this->test();\n    }\n}\nnew c;\n?>")).toMatchSnapshot();
  });
});
