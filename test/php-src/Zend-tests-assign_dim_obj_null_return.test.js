// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_dim_obj_null_return.phpt
  it("Various null return conditions of dim/obj assignments", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $array = [PHP_INT_MAX => 42];\n    $true = true;\n    try {\n        var_dump($array[] = 123);\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    try {\n        var_dump($array[[]] = 123);\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    try {\n        var_dump($array[new stdClass] = 123);\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    try {\n        var_dump($true[123] = 456);\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    try {\n        var_dump($array[] += 123);\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    try {\n        var_dump($array[[]] += 123);\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    try {\n        var_dump($array[new stdClass] += 123);\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    try {\n        var_dump($true[123] += 456);\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    try {\n        var_dump($true->foo = 123);\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    try {\n        var_dump($true->foo += 123);\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
