// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_097.phpt
  it("Incrementing/decrementing past max/min value (additional cases)", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int $foo;\n}\n$test = new Test;\n$test->foo = PHP_INT_MIN;\ntry {\n    --$test->foo;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($test->foo);\ntry {\n    $test->foo--;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($test->foo);\n$test->foo = PHP_INT_MAX;\ntry {\n    ++$test->foo;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($test->foo);\ntry {\n    $test->foo++;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($test->foo);\n// Do the same things again, but with the property being a reference.\n$ref =& $test->foo;\n$test->foo = PHP_INT_MIN;\ntry {\n    --$test->foo;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($test->foo);\ntry {\n    $test->foo--;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($test->foo);\n$test->foo = PHP_INT_MAX;\ntry {\n    ++$test->foo;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($test->foo);\ntry {\n    $test->foo++;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($test->foo);\n?>")).toMatchSnapshot();
  });
});
