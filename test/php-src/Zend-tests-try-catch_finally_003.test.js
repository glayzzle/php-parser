// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/catch_finally_003.phpt
  it("Try catch finally (with multi-returns)", function () {
    expect(parser.parseCode("<?php\nfunction dummy($msg) {\n   var_dump($msg);\n}\nfunction foo ($a) {\n   try {\n       dummy(\"try\");\n       return $a;\n   } catch (Exception $e) {\n       throw $e;\n   } finally {\n       dummy(\"finally\");\n       return \"finally\";\n   }\n   return \"end\";\n}\nfunction &bar($a) {\n   try {\n     echo \"try\\n\";\n     throw new Exception(\"ex\");\n   } catch (Exception $e) {\n   } finally {\n     return $a;\n   }\n   return ($c = \"end\");\n}\nvar_dump(foo(\"para\"));\nvar_dump(bar(\"para\"));\n?>")).toMatchSnapshot();
  });
});
