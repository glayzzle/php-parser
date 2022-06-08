// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/036.phpt
  it("Child public element should not override parent private element in parent methods", function () {
    expect(parser.parseCode("<?php\nclass par {\n    private $id = \"foo\";\n    function displayMe()\n    {\n        print $this->id;\n    }\n};\nclass chld extends par {\n    public $id = \"bar\";\n    function displayHim()\n    {\n        parent::displayMe();\n    }\n};\n$obj = new chld();\n$obj->displayHim();\n?>")).toMatchSnapshot();
  });
});
