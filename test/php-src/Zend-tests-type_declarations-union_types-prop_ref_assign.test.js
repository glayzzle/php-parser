// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/prop_ref_assign.phpt
  it("Assignments to references that are held by properties with union types", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int|string $x;\n    public float|string $y;\n}\n$test = new Test;\n$r = \"foobar\";\n$test->x =& $r;\n$test->y =& $r;\n$v = 42;\ntry {\n    $r = $v;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($r, $v);\n$v = 42.0;\ntry {\n    $r = $v;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($r, $v);\nunset($r, $test->x, $test->y);\n$test->x = 42;\ntry {\n    $test->y =& $test->x;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nunset($test->x, $test->y);\n$test->y = 42.0;\ntry {\n    $test->x =& $test->y;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
