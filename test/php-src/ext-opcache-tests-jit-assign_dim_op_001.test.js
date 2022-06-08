// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_op_001.phpt
  it("JIT ASSIGN_DIM_OP: 001", function () {
    expect(parser.parseCode("<?php\nfunction test1() {\n    $x = \"a\";\n    $a[$x . \"b\"] = 0;\n    $a[$x . \"b\"] += 2;\n    var_dump($a);\n}\ntest1();\nfunction false_to_array($a) {\n    $a[2] += 1;\n    return $a;\n}\nfunction false_to_array_append($a) {\n    $a[] += 1;\n    return $a;\n}\nfunction false_to_array_invalid_index($a) {\n    var_dump($a[[]] += 1);\n    return $a;\n}\nfunction false_to_array_nested($a) {\n    $a[2][3] += 1;\n    return $a;\n}\nfunction false_to_array_nested_append($a) {\n    $a[][] += 1;\n    return $a;\n}\nfunction false_to_array_nested_invalid_index($a) {\n    $a[[]][0] += 1;\n    return $a;\n}\nfunction modulo_string($a) {\n    $a[] %= \"\";\n}\nfalse_to_array(false);\nfalse_to_array_append(false);\ntry {\n    var_dump(false_to_array_invalid_index(false));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(false_to_array_nested(false));\nvar_dump(false_to_array_nested_append(false));\ntry {\n    var_dump(false_to_array_nested_invalid_index(false));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(modulo_string([]));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
