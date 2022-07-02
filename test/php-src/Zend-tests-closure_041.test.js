// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_041.phpt
  it("Closure 041: Rebinding: preservation of previous scope when not given as arg unless impossible", function () {
    expect(parser.parseCode("<?php\n/* It's impossible to preserve the previous scope when doing so would break\n * the invariants that, for non-static closures, having a scope is equivalent\n * to having a bound instance. */\n$staticUnscoped = static function () {\n    echo \"scoped to A: \"; var_dump(isset(A::$priv));\n    echo \"bound: \", isset($this)?get_class($this):\"no\";\n};\n$nonstaticUnscoped = function () {\n    echo \"scoped to A: \"; var_dump(isset(A::$priv));\n    echo \"bound: \", isset($this)?get_class($this):\"no\";\n};\nclass A {\n    private static $priv = 7;\n    function getClosure() {\n        return function () {\n            echo \"scoped to A: \"; var_dump(isset(A::$priv));\n            echo \"bound: \", isset($this)?get_class($this):\"no\";\n        };\n    }\n    function getStaticClosure() {\n        return static function () {\n            echo \"scoped to A: \"; var_dump(isset(A::$priv));\n            echo \"bound: \", isset($this)?get_class($this):\"no\";\n        };\n    }\n}\nclass B extends A {}\n$a = new A();\n$staticScoped = $a->getStaticClosure();\n$nonstaticScoped = $a->getClosure();\necho \"Before binding\", \"\\n\";\n$staticUnscoped(); echo \"\\n\";\n$nonstaticUnscoped(); echo \"\\n\";\n$staticScoped(); echo \"\\n\";\n$nonstaticScoped(); echo \"\\n\";\necho \"After binding, no instance\", \"\\n\";\n$d = $staticUnscoped->bindTo(null); $d(); echo \"\\n\";\n$d = $nonstaticUnscoped->bindTo(null); $d(); echo \"\\n\";\n$d = $staticScoped->bindTo(null); $d(); echo \"\\n\";\n$d = $nonstaticScoped->bindTo(null); var_dump($d); echo \"\\n\";\necho \"After binding, with same-class instance for the bound ones\", \"\\n\";\n$d = $staticUnscoped->bindTo(new A);\n$d = $nonstaticUnscoped->bindTo(new A); $d(); echo \" (should be scoped to dummy class)\\n\";\n$d = $staticScoped->bindTo(new A);\n$d = $nonstaticScoped->bindTo(new A); $d(); echo \"\\n\";\necho \"After binding, with different instance for the bound ones\", \"\\n\";\n$d = $nonstaticUnscoped->bindTo(new B); $d(); echo \" (should be scoped to dummy class)\\n\";\n$d = $nonstaticScoped->bindTo(new B); $d(); echo \"\\n\";\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
