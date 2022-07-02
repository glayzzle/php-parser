// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug27798.phpt
  it("Bug #27798 (private / protected variables not exposed by get_object_vars() inside class)", function () {
    expect(parser.parseCode("<?php\nclass Base\n{\n    public    $Foo = 1;\n    protected $Bar = 2;\n    private   $Baz = 3;\n    function __construct()\n    {\n        echo __METHOD__ . \"\\n\";\n        var_dump(get_object_vars($this));\n    }\n}\nclass Child extends Base\n{\n    private   $Baz = 4;\n    function __construct()\n    {\n        parent::__construct();\n        echo __METHOD__ . \"\\n\";\n        var_dump(get_object_vars($this));\n    }\n}\nvar_dump(get_object_vars(new Base));\nvar_dump(get_object_vars(new Child));\n?>")).toMatchSnapshot();
  });
});
