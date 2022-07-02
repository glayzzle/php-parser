// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/object_reference_001.phpt
  it("ZE2 object references", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public $name;\n    function __construct() {\n        $this->name = \"I'm Foo!\\n\";\n    }\n}\n$foo = new Foo;\necho $foo->name;\n$bar = $foo;\n$bar->name = \"I'm Bar!\\n\";\n// In ZE1, we would expect \"I'm Foo!\"\necho $foo->name;\n?>")).toMatchSnapshot();
  });
});
