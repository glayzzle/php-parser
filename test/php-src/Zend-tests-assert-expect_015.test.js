// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_015.phpt
  it("AST pretty-peinter", function () {
    expect(parser.parseCode("<?php\nassert(0 && ($a = function () {\n    global $a, $$b;\n    static $c, $d = 0;\n    unset($e);\n    $x = isset($a) && !empty($b) || eval($c);\n    $x = $a ? $b : $c;\n    $x = $a ?: $c;\n    $x = $a ?? $b;\n    list($a, $b, $c) = [1, 2=>'x', 'z'=>'c'];\n    @foo();\n    $y = clone $x;\n    yield 1 => 2;\n    yield from $x;\n}));\nassert(0 && ($a = function &(array &$a, ?X $b = null) use ($c,&$d) : ?X {\n    abstract class A extends B implements C, D {\n        const X = 12;\n        const Y = self::X, Z = \"aaa\";\n        public $a = 1, $b;\n        protected $c;\n        static private $d = null;\n        abstract function foo();\n        static private function f1() {\n            for ($i = 0, $j = 100; $i < $j; $i++, --$j) {\n                $s[$i] = $a[$j];\n            }\n            foreach ($a as $key => &$val) {\n                print \"$key => $val\\n\";\n            }\n            while ($s[$i]) {\n                $i++;\n            }\n            do {\n                $i--;\n            } while ($s[$i]);\n            $x = foo($a + 1, 4, ...[1,2,3]);\n            $x = ${$a . \"_1\"}();\n            $x = A::foo();\n            $x = ${$a . \"_1\"}::foo();\n            $x = A::${$a . \"_1\"}();\n            $x = $x->foo();\n            $x = ${$a . \"_1\"}->foo();\n            $x = $x->{$a . \"_1\"}();\n            $x->a = C::C;\n            ${$a . \"_1\"}->a = ${$a . \"_1\"}::C;\n            $x->{a . \"_1\"} = C::C;\n            $x = C::$z;\n            $x = ${$a . \"_1\"}::$z;\n            $x = C::${$z . \"_1\"};\n            $x?->y;\n            $x?->y();\n            foo(bar: $x);\n        }\n    }\n}));\nassert(0 && ($a = function &(array &$a, X $b = null, int|float $c) use ($c,&$d) : X {\n    final class A {\n        final protected function f2() {\n            if (!$x) {\n                return 0;\n            }\n            if ($x == 1) {\n                return 1;\n            } else if ($x == 2) {\n                return 2;\n            } else if ($x == 3) {\n                return 3;\n            } else {\n                if ($x == 9) {\n                    return 9;\n                }\nL0:\n                do {\n                    switch ($x) {\n                        case 4: break;\n                        case 5: continue;\n                        case 6: break 2;\n                        case 7: continue 2;\n                        case 8: goto L0;\n                        default: return;\n                    }\n                } while (0);\n            }\n        }\n    }\n}));\nassert(0 && ($a = function &(?array &$a, X $b = null) use ($c,&$d) : X {\n    class A {\n        use T1, T2 {\n            T1::foo insteadof foo;\n            T2::foo as bar;\n            baz as public;\n            ops as protected x;\n        }\n        use T3;\n    }\n}));\nassert(0 && ($a = function &(array &...$a) {\n    declare(A=1,B=2);\n    try {\n        $i++;\n    } catch (MyException $e) {\n        echo 1;\n    } catch (Exception $e) {\n        echo 2;\n    } finally {\n        echo 3;\n    }\n}));\nassert(0 && ($a = function (): ?static {\n    declare(C=1) { echo 1; }\n    $x = '\\'\"`$a';\n    $x = \"'\\\"`$a\";\n    $x = `'\"\\`$a`;\n    $x = \"{$a}b\";\n    $x = \"${a}b\";\n    $x = \" {$foo->bar} ${$foo->bar} \";\n    $x = \" ${'---'} \";\n    foo();\n    \\foo();\n    namespace\\foo();\n    $x = foo;\n    $x = \\foo;\n    $x = namespace\\foo;\n    $x = new foo();\n    $x = new \\foo();\n    $x = new namespace\\foo();\n    if ($a) {\n    } elseif ($b) {\n    }\n    if ($a); else;\n}));\n?>")).toMatchSnapshot();
  });
});
