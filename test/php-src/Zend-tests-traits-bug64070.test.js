// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug64070.phpt
  it("Bug #64070 (Inheritance with Traits failed with error)", function () {
    expect(parser.parseCode("<?php\ntrait first_trait\n{\n    function first_function()\n    {\n        echo \"From First Trait\\n\";\n    }\n}\ntrait second_trait\n{\n    use first_trait {\n        first_trait::first_function as second_function;\n    }\n    function first_function()\n    {\n        echo \"From Second Trait\\n\";\n    }\n}\nclass first_class\n{\n    use second_trait;\n}\n$obj = new first_class();\n$obj->first_function();\n$obj->second_function();\n?>")).toMatchSnapshot();
  });
});
