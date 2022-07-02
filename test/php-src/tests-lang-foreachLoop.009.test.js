// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreachLoop.009.phpt
  it("Foreach loop tests - foreach operates on the original array if the array is referenced outside the loop.", function () {
    expect(parser.parseCode("<?php\n// From php.net/foreach:\n// \"Unless the array is referenced, foreach operates on a copy of the specified array.\"\necho \"\\nRemove elements from a referenced array during loop\\n\";\n$refedArray=array(\"original.0\", \"original.1\", \"original.2\");\n$ref=&$refedArray;\nforeach ($refedArray as $k=>$v1) {\n    array_pop($refedArray);\n    echo \"key: $k; value: $v1\\n\";\n}\necho \"\\nRemove elements from a referenced array during loop, using &\\$value\\n\";\n$refedArray=array(\"original.0\", \"original.1\", \"original.2\");\n$ref=&$refedArray;\nforeach ($refedArray as $k=>&$v2) {\n    array_pop($refedArray);\n    echo \"key: $k; value: $v2\\n\";\n}\necho \"\\nAdd elements to a referenced array during loop\\n\";\n$refedArray=array(\"original.0\", \"original.1\", \"original.2\");\n$ref=&$refedArray;\n$count=0;\nforeach ($refedArray as $k=>$v3) {\n    array_push($refedArray, \"new.$k\");\n    echo \"key: $k; value: $v3\\n\";\n    if ($count++>5) {\n        echo \"Loop detected, as expected.\\n\";\n        break;\n    }\n}\necho \"\\nAdd elements to a referenced array during loop, using &\\$value\\n\";\n$refedArray=array(\"original.0\", \"original.1\", \"original.2\");\n$ref=&$refedArray;\n$count=0;\nforeach ($refedArray as $k=>&$v4) {\n    array_push($refedArray, \"new.$k\");\n    echo \"key: $k; value: $v4\\n\";\n    if ($count++>5) {\n        echo \"Loop detected, as expected.\\n\";\n        break;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
