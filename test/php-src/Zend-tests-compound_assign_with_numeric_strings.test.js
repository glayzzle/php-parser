// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/compound_assign_with_numeric_strings.phpt
  it("Error cases of compound shift assignment on strings", function () {
    expect(parser.parseCode("<?php\n$n = \"65\";\n$n <<= $n;\nvar_dump($n);\n$n = \"-1\";\ntry {\n    $n <<= $n;\n    var_dump($n);\n} catch (ArithmeticError $e) {\n    echo \"\\nException: \" . $e->getMessage() . \"\\n\";\n}\n$n = \"65\";\n$n >>= $n;\nvar_dump($n);\n$n = \"-1\";\ntry {\n  $n >>= $n;\n  var_dump($n);\n} catch (ArithmeticError $e) {\n    echo \"\\nException: \" . $e->getMessage() . \"\\n\";\n}\n$n = \"0\";\ntry{\n  $n %= $n;\n  var_dump($n);\n} catch (DivisionByZeroError $e) {\n    echo \"\\nException: \" . $e->getMessage() . \"\\n\";\n}\n$n = \"-1\";\n$n %= $n;\nvar_dump($n);\n?>")).toMatchSnapshot();
  });
});
