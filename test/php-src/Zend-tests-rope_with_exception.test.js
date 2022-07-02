// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/rope_with_exception.phpt
  it("Exceptions thrown into a rope must not leak", function () {
    expect(parser.parseCode("<?php\nclass Obj {\n    function __get($x) {\n        throw new Exception();\n    }\n}\ntry {\n    $x = new Obj;\n    $y = 0;\n    $r = \"$y|$x->x|\";\n    echo \"should never be reached\";\n} catch (Exception $e) {\n    echo \"$e\\n\";\n}\ntry {\n    $x = new Obj;\n    $y = 0;\n    $r = \"$y$x->x|\";\n    echo \"should never be reached\";\n} catch (Exception $e) {\n    echo \"$e\\n\";\n}\ntry {\n    $x = new Obj;\n    $y = 0;\n    $r = \"$y|$y$x->x\";\n    echo \"should never be reached\";\n} catch (Exception $e) {\n    echo \"$e\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
