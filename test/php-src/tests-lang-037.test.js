// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/037.phpt
  it("'Static' binding for private variables", function () {
    expect(parser.parseCode("<?php\nclass par {\n    private $id=\"foo\";\n    function displayMe()\n    {\n        $this->displayChild();\n    }\n};\nclass chld extends par {\n    private $id = \"bar\";\n    function displayChild()\n    {\n        print $this->id;\n    }\n};\n$obj = new chld();\n$obj->displayMe();\n?>")).toMatchSnapshot();
  });
});
