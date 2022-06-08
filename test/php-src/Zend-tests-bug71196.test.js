// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71196.phpt
  it("Bug #71196 (Memory leak with out-of-order live ranges)", function () {
    expect(parser.parseCode("<?php\ntry  {\n        $a = \"1\";\n        [1, (y().$a.$a) . ($a.$a)];\n} catch (Error $e) {\n        var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
