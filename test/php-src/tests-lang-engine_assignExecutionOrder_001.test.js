// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/engine_assignExecutionOrder_001.phpt
  it("Evaluation order during assignments.", function () {
    expect(parser.parseCode("<?php\nfunction f() {\n    echo \"in f()\\n\";\n    return \"name\";\n}\nfunction g() {\n    echo \"in g()\\n\";\n    return \"assigned value\";\n}\necho \"\\n\\nOrder with local assignment:\\n\";\n${f()} = g();\nvar_dump($name);\necho \"\\n\\nOrder with array assignment:\\n\";\n$a[f()] = g();\nvar_dump($a);\necho \"\\n\\nOrder with object property assignment:\\n\";\n$oa = new stdClass;\n$oa->${f()} = g();\nvar_dump($oa);\necho \"\\n\\nOrder with nested object property assignment:\\n\";\n$ob = new stdClass;\n$ob->o1 = new stdClass;\n$ob->o1->o2 = new stdClass;\n$ob->o1->o2->${f()} = g();\nvar_dump($ob);\necho \"\\n\\nOrder with dim_list property assignment:\\n\";\n$oc = new stdClass;\n$oc->a[${f()}] = g();\nvar_dump($oc);\nclass C {\n    public static $name = \"original\";\n    public static $a = array();\n    public static $string = \"hello\";\n}\necho \"\\n\\nOrder with static property assignment:\\n\";\nC::${f()} = g();\nvar_dump(C::$name);\necho \"\\n\\nOrder with static array property assignment:\\n\";\nC::$a[f()] = g();\nvar_dump(C::$a);\necho \"\\n\\nOrder with indexed string assignment:\\n\";\n$string = \"hello\";\nfunction getOffset() {\n    echo \"in getOffset()\\n\";\n    return 0;\n}\nfunction newChar() {\n    echo \"in newChar()\\n\";\n    return 'j';\n}\n$string[getOffset()] = newChar();\nvar_dump($string);\necho \"\\n\\nOrder with static string property assignment:\\n\";\nC::$string[getOffset()] = newChar();\nvar_dump(C::$string);\n?>")).toMatchSnapshot();
  });
});
