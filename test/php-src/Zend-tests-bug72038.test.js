// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72038.phpt
  it("Bug #72038 (Function calls with values to a by-ref parameter don't always throw a notice)", function () {
    expect(parser.parseCode("<?php\ntry {\n    test($foo = new stdClass);\n    var_dump($foo);\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    test($bar = 2);\n    var_dump($bar);\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntest($baz = &$bar);\nvar_dump($baz);\nfunction test(&$param) {\n        $param = 1;\n}\n?>")).toMatchSnapshot();
  });
});
