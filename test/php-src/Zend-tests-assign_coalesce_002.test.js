// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_coalesce_002.phpt
  it("Coalesce assign (??=): Exception handling", function () {
    expect(parser.parseCode("<?php\n$foo = \"fo\";\n$foo .= \"o\";\n$bar = \"ba\";\n$bar .= \"r\";\nfunction id($arg) {\n    echo \"id($arg)\\n\";\n    return $arg;\n}\nfunction do_throw($msg) {\n    throw new Exception($msg);\n}\n$ary = [];\ntry {\n    $ary[id($foo)] ??= do_throw(\"ex1\");\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($ary);\nclass AA implements ArrayAccess {\n    public function offsetExists($k): bool {\n        return true;\n    }\n    public function &offsetGet($k): mixed {\n        $var = [\"foo\" => \"bar\"];\n        return $var;\n    }\n    public function offsetSet($k,$v): void {}\n    public function offsetUnset($k): void {}\n}\nclass Dtor {\n    public function __destruct() {\n        throw new Exception(\"dtor\");\n    }\n}\n$ary = new AA;\ntry {\n    $ary[new Dtor][id($foo)] ??= $bar;\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($foo);\nclass AA2 implements ArrayAccess {\n    public function offsetExists($k): bool {\n        return false;\n    }\n    public function offsetGet($k): mixed {\n        return null;\n    }\n    public function offsetSet($k,$v): void {}\n    public function offsetUnset($k): void {}\n}\n$ary = [\"foo\" => new AA2];\ntry {\n    $ary[id($foo)][new Dtor] ??= $bar;\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($foo);\n?>")).toMatchSnapshot();
  });
});
