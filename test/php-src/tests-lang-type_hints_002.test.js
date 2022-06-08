// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/type_hints_002.phpt
  it("ZE2 type hinting", function () {
    expect(parser.parseCode("<?php\nclass P { }\nclass T {\n    function f(P $p = NULL) {\n        var_dump($p);\n        echo \"-\\n\";\n    }\n}\n$o=new T();\n$o->f(new P);\n$o->f();\n$o->f(NULL);\n?>")).toMatchSnapshot();
  });
});
