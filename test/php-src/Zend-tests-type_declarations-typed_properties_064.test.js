// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_064.phpt
  it("Typed property on by-ref array value", function () {
    expect(parser.parseCode("<?php\n$a = new class {\n    public int $foo = 1;\n};\n$_ = [&$a->foo];\n$_[0] += 1;\nvar_dump($a->foo);\n$_[0] .= \"1\";\nvar_dump($a->foo);\ntry {\n    $_[0] .= \"e50\";\n} catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\nvar_dump($a->foo);\n$_[0]--;\nvar_dump($a->foo);\n--$_[0];\nvar_dump($a->foo);\n$a->foo = PHP_INT_MIN;\ntry {\n        $_[0]--;\n} catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\necho gettype($a->foo),\"\\n\";\ntry {\n    --$_[0];\n} catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\necho gettype($a->foo),\"\\n\";\n$a->foo = PHP_INT_MAX;\ntry {\n    $_[0]++;\n} catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\necho gettype($a->foo),\"\\n\";\ntry {\n    ++$_[0];\n} catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\necho gettype($a->foo),\"\\n\";\n$_[0] = 0;\ntry {\n    $_[0] = [];\n} catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\nvar_dump($a->foo);\n$_[0] = 1;\nvar_dump($a->foo);\n?>")).toMatchSnapshot();
  });
});
