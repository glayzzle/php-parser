// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/catch_finally_002.phpt
  it("Try catch finally (basic test with return)", function () {
    expect(parser.parseCode("<?php\nfunction foo () {\n   try {\n     echo \"try\\n\";\n     return 1;\n   } catch (Exception $e) {\n   } finally {\n     echo \"finally\\n\";\n   }\n   return 2;\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
