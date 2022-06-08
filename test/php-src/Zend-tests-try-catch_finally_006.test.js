// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/catch_finally_006.phpt
  it("Try catch finally (re-throw exception in catch block)", function () {
    expect(parser.parseCode("<?php\nfunction foo ($a) {\n   try {\n     throw new Exception(\"ex\");\n   } catch (Exception $e) {\n     var_dump($a);\n     throw $e;\n   } finally {\n     var_dump(\"finally\");\n     return \"return\";\n   }\n   return 1;\n}\ntry {\n   var_dump(foo(\"para\"));\n} catch (Exception $e) {\n    \"caught exception\" . PHP_EOL;\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
