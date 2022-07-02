// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreachLoopObjects.001.phpt
  it("Foreach loop on objects - basic loop with just value and key => value.", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public $a = \"Original a\";\n    public $b = \"Original b\";\n    public $c = \"Original c\";\n    protected $d = \"Original d\";\n    private $e = \"Original e\";\n}\necho \"\\n\\nSimple loop.\\n\";\n$obj = new C;\nforeach ($obj as $v) {\n    var_dump($v);\n}\nforeach ($obj as $k => $v) {\n    var_dump($k, $v);\n}\necho \"\\nCheck key and value after the loop.\\n\";\nvar_dump($k, $v);\necho \"\\n\\nObject instantiated inside loop.\\n\";\nforeach (new C as $v) {\n    var_dump($v);\n}\nforeach (new C as $k => $v) {\n    var_dump($k, $v);\n}\necho \"\\nCheck key and value after the loop.\\n\";\nvar_dump($k, $v);\n?>")).toMatchSnapshot();
  });
});
