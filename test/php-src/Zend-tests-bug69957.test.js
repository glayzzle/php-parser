// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69957.phpt
  it("Bug #69957 (Different ways of handling div/mod by zero)", function () {
    expect(parser.parseCode("<?php\ntry {\n    $divisor = 0;\n    $result = 1 / $divisor;\n    var_dump($result);\n} catch (DivisionByZeroError $t){\n    echo \"Variable div\\n\";\n    printf(\"Type: %s\\n\", get_class($t));\n    printf(\"Message: %s\\n\", $t->getMessage());\n}\ntry {\n    $divisor = 0;\n    $result = 1 % $divisor;\n    var_dump($result);\n} catch (DivisionByZeroError $t){\n    echo \"\\nVariable mod\\n\";\n    printf(\"Type: %s\\n\", get_class($t));\n    printf(\"Message: %s\\n\", $t->getMessage());\n}\ntry {\n    $result = 1 / 0;\n    var_dump($result);\n} catch (DivisionByZeroError $t){\n    echo \"\\nLiteral div\\n\";\n    printf(\"Type: %s\\n\", get_class($t));\n    printf(\"Message: %s\\n\", $t->getMessage());\n}\ntry {\n    $result = 1 % 0;\n    var_dump($result);\n} catch (DivisionByZeroError $t){\n    echo \"\\nLiteral mod\\n\";\n    printf(\"Type: %s\\n\", get_class($t));\n    printf(\"Message: %s\\n\", $t->getMessage());\n}\ntry {\n    $result = 1 / 0.0;\n    var_dump($result);\n} catch (DivisionByZeroError $t){\n    echo \"\\nDouble div\\n\";\n    printf(\"Type: %s\\n\", get_class($t));\n    printf(\"Message: %s\\n\", $t->getMessage());\n}\ntry {\n    $result = 1 % 0.0;\n    var_dump($result);\n} catch (DivisionByZeroError $t){\n    echo \"\\nDouble mod\\n\";\n    printf(\"Type: %s\\n\", get_class($t));\n    printf(\"Message: %s\\n\", $t->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
