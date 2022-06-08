// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/undef_to_typed_ref.phpt
  it("Assign undef var to typed reference", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public string $x;\n}\nfunction test_simple_res() {\n    $test = new Test;\n    $test->x = \"\";\n    $r =& $test->x;\n    var_dump($r = $v);\n}\nfunction test_simple_nores() {\n    $test = new Test;\n    $test->x = \"\";\n    $r =& $test->x;\n    $r = $v;\n}\nfunction test_dim_res() {\n    $test = new Test;\n    $test->x = \"\";\n    $a[0] =& $test->x;\n    var_dump($a[0] = $v);\n}\nfunction test_dim_nores() {\n    $test = new Test;\n    $test->x = \"\";\n    $a[0] =& $test->x;\n    $a[0] = $v;\n}\nfunction test_obj_res() {\n    $test = new Test;\n    $test->x = \"\";\n    $o = new stdClass;\n    $o->p =& $test->x;\n    var_dump($o->p = $v);\n}\nfunction test_obj_nores() {\n    $test = new Test;\n    $test->x = \"\";\n    $o = new stdClass;\n    $o->p =& $test->x;\n    $o->p = $v;\n}\ntry {\n    test_simple_res();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test_simple_nores();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test_dim_res();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test_dim_nores();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test_obj_res();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test_obj_nores();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
