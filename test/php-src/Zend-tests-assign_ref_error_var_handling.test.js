// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_ref_error_var_handling.phpt
  it("If the LHS of ref-assign ERRORs, that takes precedence over the \"only variables\" notice", function () {
    expect(parser.parseCode("<?php\nfunction val() {\n    return 42;\n}\n$var = 24;\n$arr = [PHP_INT_MAX => \"foo\"];\ntry {\n    var_dump($arr[] =& $var);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(count($arr));\ntry {\n    var_dump($arr[] =& val());\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(count($arr));\n?>")).toMatchSnapshot();
  });
});
