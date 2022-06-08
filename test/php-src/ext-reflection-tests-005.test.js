// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/005.phpt
  it("ReflectionMethod::getDocComment() uses wrong comment block", function () {
    expect(parser.parseCode("<?php\nfunction strip_doc_comment($c)\n{\n    if (!strlen($c) || $c === false) return $c;\n    return trim(substr($c, 3, -2));\n}\n/** Comment for class A */\nclass A\n{\n    /** Method A::bla()\n     */\n    function bla()\n    {\n    }\n    function foo() {\n        /**\n        * This is a valid comment inside a method\n        */\n    }\n    function bar() {\n        // I don't have a doc comment....\n    }\n    /**\n     * Comment for A::baz()\n     */\n    function baz() {\n    }\n}\n$r = new ReflectionClass('A');\nvar_dump(strip_doc_comment($r->getDocComment()));\nforeach($r->getMethods() as $m)\n{\n    var_dump(strip_doc_comment($m->getDocComment()));\n}\n?>")).toMatchSnapshot();
  });
});
