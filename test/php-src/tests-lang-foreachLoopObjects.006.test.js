// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreachLoopObjects.006.phpt
  it("Foreach loop tests - substituting the entire iterated entity during the loop.", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public $a = \"Original a\";\n    public $b = \"Original b\";\n    public $c = \"Original c\";\n    public $d = \"Original d\";\n    public $e = \"Original e\";\n}\necho \"\\nSubstituting the iterated object for a different object.\\n\";\n$obj = new C;\n$obj2 = new stdclass;\n$obj2->a = \"new a\";\n$obj2->b = \"new b\";\n$obj2->c = \"new c\";\n$obj2->d = \"new d\";\n$obj2->e = \"new e\";\n$obj2->f = \"new f\";\n$ref = &$obj;\n$count=0;\nforeach ($obj as $v) {\n    var_dump($v);\n    if ($v==$obj->b) {\n      $ref=$obj2;\n    }\n    if (++$count>10) {\n        echo \"Loop detected.\\n\";\n        break;\n    }\n}\nvar_dump($obj);\necho \"\\nSubstituting the iterated object for an array.\\n\";\n$obj = new C;\n$a = array(1,2,3,4,5,6,7,8);\n$ref = &$obj;\n$count=0;\nforeach ($obj as $v) {\n    var_dump($v);\n    if ($v===\"Original b\") {\n      $ref=$a;\n    }\n    if (++$count>10) {\n        echo \"Loop detected.\\n\";\n        break;\n    }\n}\nvar_dump($obj);\necho \"\\nSubstituting the iterated array for an object.\\n\";\n$a = array(1,2,3,4,5,6,7,8);\n$obj = new C;\n$ref = &$a;\n$count=0;\nforeach ($a as $v) {\n    var_dump($v);\n    if ($v===2) {\n      $ref=$obj;\n    }\n    if (++$count>10) {\n        echo \"Loop detected.\\n\";\n        break;\n    }\n}\nvar_dump($obj);\n?>")).toMatchSnapshot();
  });
});
