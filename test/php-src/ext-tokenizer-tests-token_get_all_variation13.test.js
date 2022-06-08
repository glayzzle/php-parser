// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_variation13.phpt
  it("Test token_get_all() function : usage variations - with class/object constructs", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing token_get_all() with different class/object keywords\n *   scope related :\n *     static - T_STATIC(346), global - T_GLOBAL(340),\n *     private - T_PRIVATE(343), public - T_PUBLIC(341),\n *     protected - T_PROTECTED(342)\n *   class/object related :\n *     var - T_VAR(347), abstract - T_ABSTRACT(345),\n *     interface - T_INTERFACE(353), class - T_CLASS(352),\n *     extends - T_EXTENDS(354), implements - T_IMPLEMENTS(355), new - T_NEW(299)\n*/\necho \"*** Testing token_get_all() : with class/object constructs ***\\n\";\n$source = '<?php\ninterface MyInterface\n{\n  public const var $var = 10;\n}\nabstract class MyClass\n{\n  private var $a;\n  public var $b;\n  protected var $c;\n  static $d;\n  final $e = 10;\n  abstract public function myFunction($a);\n}\nclass ChildClass extends MyClass implements MyInterface\n{\n  global $value;\n  function myFunction($a)\n  {\n    $a = new ChildClass();\n    if($a instanceof MyClass)\n      echo \"object created\";\n  }\n}\nChildClass::myFunction(10);\n?>';\n$tokens =  token_get_all($source);\nvar_dump($tokens);\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
