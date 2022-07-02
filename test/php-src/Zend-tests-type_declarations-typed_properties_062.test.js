// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_062.phpt
  it("Typed property on by-ref property", function () {
    expect(parser.parseCode("<?php\n$a = new class {\n    public int $foo = 1;\n    public $_;\n};\n$a->_ = &$a->foo;\n$a->_ += 1;\nvar_dump($a->foo);\n$a->_ .= \"1\";\nvar_dump($a->foo);\ntry {\n    $a->_ .= \"e50\";\n} catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\nvar_dump($a->foo);\n$a->_--;\nvar_dump($a->foo);\n--$a->_;\nvar_dump($a->foo);\n$a->foo = PHP_INT_MIN;\ntry {\n    $a->_--;\n} catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\necho gettype($a->foo),\"\\n\";\ntry {\n    --$a->_;\n} catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\necho gettype($a->foo),\"\\n\";\n$a->foo = PHP_INT_MAX;\ntry {\n    $a->_++;\n} catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\necho gettype($a->foo),\"\\n\";\ntry {\n    ++$a->_;\n} catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\necho gettype($a->foo),\"\\n\";\n$a->_ = 0;\ntry {\n    $a->_ = [];\n} catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\nvar_dump($a->foo);\n$a->_ = 1;\nvar_dump($a->foo);\n?>")).toMatchSnapshot();
  });
});
