// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/tostring_001.phpt
  it("ZE2 __toString()", function () {
    expect(parser.parseCode("<?php\nclass test1\n{\n}\nclass test2\n{\n    function __toString()\n    {\n        echo __METHOD__ . \"()\\n\";\n        return \"Converted\\n\";\n    }\n}\nclass test3\n{\n    function __toString()\n    {\n        echo __METHOD__ . \"()\\n\";\n        return [];\n    }\n}\necho \"====test1====\\n\";\n$o = new test1;\nprint_r($o);\ntry {\n    var_dump((string)$o);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($o);\necho \"====test2====\\n\";\n$o = new test2;\nprint_r($o);\nprint $o;\nvar_dump($o);\necho \"====test3====\\n\";\necho $o;\necho \"====test4====\\n\";\necho \"string:\".$o;\necho \"====test5====\\n\";\necho 1 . $o;\necho 1 , $o;\necho \"====test6====\\n\";\necho $o . $o;\necho $o , $o;\necho \"====test7====\\n\";\n$ar = array();\n$ar[$o->__toString()] = \"ERROR\";\ntry {\n    echo $ar[$o];\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"====test8====\\n\";\nvar_dump(trim($o));\nvar_dump(trim((string)$o));\necho \"====test9====\\n\";\necho sprintf(\"%s\", $o);\necho \"====test10====\\n\";\n$o = new test3;\nvar_dump($o);\ntry {\n    echo $o;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>\n====DONE====")).toMatchSnapshot();
  });
});
