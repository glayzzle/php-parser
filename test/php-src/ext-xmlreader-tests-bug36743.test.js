// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/bug36743.phpt
  it("Bug #36743 (In a class extending XMLReader array properties are not writable)", function () {
    expect(parser.parseCode("<?php\nclass Test extends XMLReader\n{\n    private $testArr = array();\n    public function __construct()\n    {\n        $this->testArr[] = 1;\n        var_dump($this->testArr);\n    }\n}\n$t = new test;\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
