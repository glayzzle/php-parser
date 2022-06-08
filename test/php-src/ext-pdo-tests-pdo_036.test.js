// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_036.phpt
  it("Testing PDORow and PDOStatement instances with Reflection", function () {
    expect(parser.parseCode("<?php\n$instance = new reflectionclass('pdostatement');\n$x = $instance->newInstance();\nvar_dump($x);\n// Allow initializing assignment.\n$x->queryString = \"SELECT 1\";\nvar_dump($x);\n// But don't allow reassignment.\ntry {\n    $x->queryString = \"SELECT 2\";\n    var_dump($x);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$instance = new reflectionclass('pdorow');\n$x = $instance->newInstance();\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
