// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_046.phpt
  it("Closure 046: Rebinding: preservation of previous scope when \"static\" given as scope arg (same as closure #041)", function () {
    expect(parser.parseCode("<?php\n/* It's impossible to preserve the previous scope when doing so would break\n * the invariants that, for non-static closures, having a scope is equivalent\n * to having a bound instance. */\n$nonstaticUnscoped = function () { var_dump(isset(A::$priv)); var_dump(isset($this)); };\nclass A {\n    private static $priv = 7;\n    function getClosure() {\n        return function() { var_dump(isset(A::$priv)); var_dump(isset($this)); };\n    }\n}\nclass B extends A {}\n$a = new A();\n$nonstaticScoped = $a->getClosure();\necho \"Before binding\", \"\\n\";\n$nonstaticUnscoped(); echo \"\\n\";\n$nonstaticScoped(); echo \"\\n\";\necho \"After binding, no instance\", \"\\n\";\n$d = $nonstaticUnscoped->bindTo(null, \"static\"); $d(); echo \"\\n\";\n$d = $nonstaticScoped->bindTo(null, \"static\"); var_dump($d); echo \"\\n\";\necho \"After binding, with same-class instance for the bound one\", \"\\n\";\n$d = $nonstaticUnscoped->bindTo(new A, \"static\"); $d(); echo \"\\n\";\n$d = $nonstaticScoped->bindTo(new A, \"static\"); $d(); echo \"\\n\";\necho \"After binding, with different instance for the bound one\", \"\\n\";\n$d = $nonstaticScoped->bindTo(new B, \"static\"); $d(); echo \"\\n\";\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
