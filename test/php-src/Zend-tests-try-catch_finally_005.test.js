// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/catch_finally_005.phpt
  it("Try catch finally (with multi-returns and exception)", function () {
    expect(parser.parseCode("<?php\nfunction foo ($a) {\n   try {\n     throw new Exception(\"ex\");\n   } catch (PdoException $e) {\n     die(\"error\");\n   } catch (Exception $e) {\n     return 2;\n   } finally {\n     return 3;\n   }\n   return 1;\n}\nvar_dump(foo(\"para\"));\n?>")).toMatchSnapshot();
  });
});
