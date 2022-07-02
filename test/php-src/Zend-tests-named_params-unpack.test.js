// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/unpack.phpt
  it("Unpacking named parameters", function () {
    expect(parser.parseCode("<?php\nfunction test($a, $b, $c) {\n    echo \"a = $a, b = $b, c = $c\\n\";\n}\nfunction test2($a = null, &$b = null) {\n    $b++;\n}\ntest(...['a' => 'a', 'b' => 'b', 'c' => 'c']);\ntest(...['c' => 'c', 'b' => 'b', 'a' => 'a']);\ntest(...['a', 'b' => 'b', 'c' => 'c']);\ntry {\n    test(...['a', 'b' => 'b', 'c']);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test(...['a', 'a' => 'a']);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$ary = ['b' => 0];\n$ary2 = $ary;\ntest2(...$ary);\nvar_dump($ary, $ary2);\ntest(...new ArrayIterator(['a' => 'a', 'b' => 'b', 'c' => 'c']));\ntest(...new ArrayIterator(['c' => 'c', 'b' => 'b', 'a' => 'a']));\ntest(...new ArrayIterator(['a', 'b' => 'b', 'c' => 'c']));\ntry {\n    test(...new ArrayIterator(['a', 'b' => 'b', 'c']));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test(...new ArrayIterator(['a', 'a' => 'a']));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$ary = ['b' => 0];\n$ary2 = $ary;\ntest2(...new ArrayIterator($ary));\nvar_dump($ary, $ary2);\n?>")).toMatchSnapshot();
  });
});
