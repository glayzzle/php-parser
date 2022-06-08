// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_043.phpt
  it("Closure 043: Scope/bounding combination invariants; static closures", function () {
    expect(parser.parseCode("<?php\n/* Whether it's scoped or not, a static closure cannot have\n * a bound instance. It should also not be automatically converted\n * to a non-static instance when attempting to bind one */\n$staticUnscoped = static function () { var_dump(isset(A::$priv)); var_dump(isset($this)); };\nclass A {\n    private static $priv = 7;\n    static function getStaticClosure() {\n        return static function() { var_dump(isset(A::$priv)); var_dump(isset($this)); };\n    }\n}\n$staticScoped = A::getStaticClosure();\necho \"Before binding\", \"\\n\";\n$staticUnscoped(); echo \"\\n\";\n$staticScoped(); echo \"\\n\";\necho \"After binding, null scope, no instance\", \"\\n\";\n$d = $staticUnscoped->bindTo(null, null); $d(); echo \"\\n\";\n$d = $staticScoped->bindTo(null, null); $d(); echo \"\\n\";\necho \"After binding, null scope, with instance\", \"\\n\";\n$d = $staticUnscoped->bindTo(new A, null);\n$d = $staticScoped->bindTo(new A, null);\necho \"After binding, with scope, no instance\", \"\\n\";\n$d = $staticUnscoped->bindTo(null, 'A'); $d(); echo \"\\n\";\n$d = $staticScoped->bindTo(null, 'A'); $d(); echo \"\\n\";\necho \"After binding, with scope, with instance\", \"\\n\";\n$d = $staticUnscoped->bindTo(new A, 'A');\n$d = $staticScoped->bindTo(new A, 'A');\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
