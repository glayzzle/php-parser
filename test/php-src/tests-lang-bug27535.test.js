// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug27535.phpt
  it("Bug #27535 (Objects pointing to each other cause Apache to crash)", function () {
    expect(parser.parseCode("<?php\nclass Class1\n{\n    public $_Class2_obj;\n}\nclass Class2\n{\n    public $storage = '';\n    function __construct()\n    {\n        $this->storage = new Class1();\n        $this->storage->_Class2_obj = $this;\n    }\n}\n$foo = new Class2();\n?>\nAlive!")).toMatchSnapshot();
  });
});
