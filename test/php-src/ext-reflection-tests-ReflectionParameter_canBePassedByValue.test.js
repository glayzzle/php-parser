// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionParameter_canBePassedByValue.phpt
  it("ReflectionParameter class - canBePassedByValue() method.", function () {
    expect(parser.parseCode("<?php\nfunction aux($fun) {\n    $func = new ReflectionFunction($fun);\n    $parameters = $func->getParameters();\n    foreach($parameters as $parameter) {\n        echo \"Name: \", $parameter->getName(), \"\\n\";\n        echo \"Is passed by reference: \", $parameter->isPassedByReference()?\"yes\":\"no\", \"\\n\";\n        echo \"Can be passed by value: \", $parameter->canBePassedByValue()?\"yes\":\"no\", \"\\n\";\n        echo \"\\n\";\n    }\n}\necho \"=> array_multisort:\\n\\n\";\naux('array_multisort');\necho \"=> sort:\\n\\n\";\naux('sort');\necho \"=> user function:\\n\\n\";\nfunction ufunc(&$array1, $array2) {}\naux('ufunc');\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
