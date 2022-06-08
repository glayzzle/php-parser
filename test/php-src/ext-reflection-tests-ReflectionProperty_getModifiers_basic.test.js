// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionProperty_getModifiers_basic.phpt
  it("Test ReflectionProperty::getModifiers() usage.", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public $a1;\n    protected $a2;\n    private $a3;\n    static public $a4;\n    static protected $a5;\n    static private $a6;\n}\nclass D extends C {\n    public $a1;\n    protected $a2;\n    private $a3;\n    static public $a4;\n    static protected $a5;\n    static private $a6;\n}\nfor ($i = 1;$i <= 6;$i++) {\n    $rp = new ReflectionProperty(\"C\", \"a$i\");\n    echo \"C::a$i: \";\n    var_dump($rp->getModifiers());\n    $rp = new ReflectionProperty(\"D\", \"a$i\");\n    echo \"D::a$i: \";\n    var_dump($rp->getModifiers());\n}\n?>")).toMatchSnapshot();
  });
});
