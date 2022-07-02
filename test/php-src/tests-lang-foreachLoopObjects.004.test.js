// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreachLoopObjects.004.phpt
  it("Foreach loop tests - Removing the current element from an iterated object.", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public $a = \"Original a\";\n    public $b = \"Original b\";\n    public $c = \"Original c\";\n    public $d = \"Original d\";\n    public $e = \"Original e\";\n}\necho \"\\nRemoving the current element from an iterated object.\\n\";\n$obj = new C;\n$count=0;\nforeach ($obj as $v) {\n    if ($v==$obj->b) {\n        unset($obj->b);\n    }\n    var_dump($v);\n    if (++$count>10) {\n        echo \"Loop detected.\\n\";\n        break;\n    }\n}\nvar_dump($obj);\n?>")).toMatchSnapshot();
  });
});
