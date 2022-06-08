// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/catch_finally_004.phpt
  it("Try catch finally (nesting try-catch-finally)", function () {
    expect(parser.parseCode("<?php\nfunction throw_exception($msg) {\n    throw new Exception($msg);\n}\nfunction foo (&$ex) {\n   try {\n      echo \"1\";\n      try {\n        echo \"2\";\n        throw_exception(\"try\");\n      } catch (Exception $e) {\n        echo \"3\";\n        throw_exception(\"catch\");\n      } finally {\n        echo \"4\";\n        throw_exception(\"finally\");\n      }\n   } catch (Exception $e) {\n      $ex = $e;\n      echo \"3\";\n   } finally {\n      echo \"2\";\n   }\n   return 1;\n}\nvar_dump(foo($ex));\ndo {\n  var_dump($ex->getMessage());\n} while ($ex = $ex->getPrevious());\n?>")).toMatchSnapshot();
  });
});
