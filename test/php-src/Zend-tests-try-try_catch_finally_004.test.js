// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_catch_finally_004.phpt
  it("Try catch finally (re-throw exception in catch block)", function () {
    expect(parser.parseCode("<?php\nfunction dummy($msg) {\n   var_dump($msg);\n}\ntry {\n    try {\n        var_dump(\"try\");\n        return;\n    } catch (Exception $e) {\n        dummy(\"catch\");\n        throw $e;\n    } finally {\n        dummy(\"finally\");\n    }\n} catch (Exception $e) {\n  dummy(\"catch2\");\n} finally {\n  dummy(\"finally2\");\n}\nvar_dump(\"end\");\n?>")).toMatchSnapshot();
  });
});
