// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_044.phpt
  it("Closure 044: Scope/bounding combination invariants; non static closures", function () {
    expect(parser.parseCode("<?php\n/* A non-static closure has a bound instance if it has a scope\n * and doesn't have an instance if it has no scope */\n$nonstaticUnscoped = function () { var_dump(isset(A::$priv)); var_dump(isset($this)); };\nclass A {\n    private static $priv = 7;\n    function getClosure() {\n        return function() { var_dump(isset(A::$priv)); var_dump(isset($this)); };\n    }\n}\n$a = new A();\n$nonstaticScoped = $a->getClosure();\necho \"Before binding\", \"\\n\";\n$nonstaticUnscoped(); echo \"\\n\";\n$nonstaticScoped(); echo \"\\n\";\necho \"After binding, null scope, no instance\", \"\\n\";\n$d = $nonstaticUnscoped->bindTo(null, null); $d(); echo \"\\n\";\n$d = $nonstaticScoped->bindTo(null, null); var_dump($d); echo \"\\n\";\necho \"After binding, null scope, with instance\", \"\\n\";\n$d = $nonstaticUnscoped->bindTo(new A, null); $d(); echo \"\\n\";\n$d = $nonstaticScoped->bindTo(new A, null); $d(); echo \"\\n\";\necho \"After binding, with scope, no instance\", \"\\n\";\n$d = $nonstaticUnscoped->bindTo(null, 'A'); $d(); echo \"\\n\";\n$d = $nonstaticScoped->bindTo(null, 'A'); var_dump($d); echo \"\\n\";\necho \"After binding, with scope, with instance\", \"\\n\";\n$d = $nonstaticUnscoped->bindTo(new A, 'A'); $d(); echo \"\\n\";\n$d = $nonstaticScoped->bindTo(new A, 'A'); $d(); echo \"\\n\";\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
