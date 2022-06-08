// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_002.phpt
  it("Try finally (re-throw exception in finally block)", function () {
    expect(parser.parseCode("<?php\nfunction foo () {\n   try {\n     throw new Exception(\"try\");\n   } finally {\n     throw new Exception(\"finally\");\n   }\n}\ntry {\n  foo();\n} catch (Exception $e) {\n  do {\n    var_dump($e->getMessage());\n  } while ($e = $e->getPrevious());\n}\n?>")).toMatchSnapshot();
  });
});
