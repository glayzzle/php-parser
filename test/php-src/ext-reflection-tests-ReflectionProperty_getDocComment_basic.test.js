// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionProperty_getDocComment_basic.phpt
  it("Test ReflectionProperty::getDocComment() usage.", function () {
    expect(parser.parseCode("<?php\nclass A {\n    /**\n     * My Doc Comment for $a\n     *\n     */\n    public $a = 2, $b, $c = 1;\n    /**\n     * My Doc Comment for $d\n     */\n    var $d;\n    /**Not a doc comment */\n    private $e;\n    /**\n     * Doc comment for $f\n     */\n    static protected $f;\n}\nclass B extends A {\n    public $a = 2;\n    /** A doc comment for $b */\n    var $b, $c = 1;\n    /** A doc comment for $e */\n    var $e;\n}\nforeach(array('A', 'B') as $class) {\n    $rc = new ReflectionClass($class);\n    $rps = $rc->getProperties();\n    foreach($rps as $rp) {\n        echo \"\\n\\n---> Doc comment for $class::$\" . $rp->getName() . \":\\n\";\n        var_dump($rp->getDocComment());\n    }\n}\n?>")).toMatchSnapshot();
  });
});
