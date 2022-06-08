// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreachLoopObjects.005.phpt
  it("Foreach loop tests - removing properties before and after the current property during the loop.", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public $a = \"Original a\";\n    public $b = \"Original b\";\n    public $c = \"Original c\";\n    public $d = \"Original d\";\n    public $e = \"Original e\";\n}\necho \"\\nRemoving properties before the current element from an iterated object.\\n\";\n$obj = new C;\n$count=0;\nforeach ($obj as $v) {\n    if ($v==$obj->a) {\n        unset($obj->c);\n    }\n    var_dump($v);\n    if (++$count>10) {\n        echo \"Loop detected.\\n\";\n        break;\n    }\n}\nvar_dump($obj);\necho \"\\nRemoving properties before the current element from an iterated object.\\n\";\n$obj = new C;\nforeach ($obj as $v) {\n    if ($v==$obj->b) {\n        unset($obj->a);\n    }\n    var_dump($v);\n    if (++$count>10) {\n        echo \"Loop detected.\\n\";\n        break;\n    }\n}\nvar_dump($obj);\n?>")).toMatchSnapshot();
  });
});
