// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/catch_finally_001.phpt
  it("Try catch finally (basic test)", function () {
    expect(parser.parseCode("<?php\nfunction foo ($throw = FALSE) {\n   try {\n     echo \"try\\n\";\n     if ($throw) {\n        throw new Exception(\"ex\");\n     }\n   } catch (Exception $e) {\n     echo \"catch\\n\";\n   } finally {\n     echo \"finally\\n\";\n   }\n   echo \"end\\n\";\n}\nfoo();\necho \"\\n\";\nfoo(true);\n?>")).toMatchSnapshot();
  });
});
