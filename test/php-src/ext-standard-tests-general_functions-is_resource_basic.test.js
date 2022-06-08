// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/is_resource_basic.phpt
  it("Test is_resource() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing is_resource() : basic functionality ***\\n\";\nclass Hello {\n  public function SayHello($arg) {\n    echo \"Hello\\n\";\n  }\n}\n$vars = array(\n    false,\n    true,\n    10,\n    10.5,\n    \"Helo World\",\n    array(1,2,3,4,5),\n    NULL,\n    new Hello());\n$types = array(\n    \"bool=false\",\n    \"bool=true\",\n    \"integer\",\n    \"double\",\n    \"string\",\n    \"array\",\n    \"NULL\",\n    \"object\");\necho \"\\nNon-resource type cases\\n\";\nfor ($i=0; $i < count($vars); $i++) {\n    if (is_resource($vars[$i])) {\n        echo $types[$i]. \" test returns TRUE\\n\";\n    } else {\n        echo $types[$i]. \" test returns FALSE\\n\";\n    }\n}\n$res = fopen(__FILE__, \"r\");\necho \"\\nResource type..var_dump after file open returns\\n\";\nvar_dump($res);\necho \"Resource type..after file open  is_resource() returns\";\nif (is_resource($res)) {\n    echo \" TRUE\\n\";\n} else {\n    echo \" FALSE\\n\";\n}\nfclose($res);\necho \"\\nResource type..var_dump after file close returns\\n\";\nvar_dump($res);\necho \"Resource type..after file close is_resource() returns\";\nif (is_resource($res)) {\n    echo \" TRUE\\n\";\n} else {\n    echo \" FALSE\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
