// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_065.phpt
  it("Typed property on by-ref array dimension", function () {
    expect(parser.parseCode("<?php\n$a = new class implements ArrayAccess {\n    public int $foo = 1;\n    function offsetExists($o): bool { return 1; }\n    function &offsetGet($o): mixed { return $this->foo; }\n    function offsetSet($o, $v): void { print \"offsetSet($v)\\n\"; }\n    function offsetUnset($o): void { print \"offsetUnset() ?!?\"; }\n};\n$a[0] += 1;\nvar_dump($a->foo);\n$a[0] .= \"1\";\nvar_dump($a->foo);\n$a[0] .= \"e50\";\nvar_dump($a->foo);\n$a[0]--;\nvar_dump($a->foo);\n--$a[0];\nvar_dump($a->foo);\n$a->foo = PHP_INT_MIN;\ntry {\n        $a[0]--;\n} catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\necho gettype($a->foo),\"\\n\";\ntry {\n    --$a[0];\n} catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\necho gettype($a->foo),\"\\n\";\n$a->foo = PHP_INT_MAX;\ntry {\n    $a[0]++;\n} catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\necho gettype($a->foo),\"\\n\";\ntry {\n    ++$a[0];\n} catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\necho gettype($a->foo),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
