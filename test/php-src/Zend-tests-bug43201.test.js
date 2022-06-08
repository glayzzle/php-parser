// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43201.phpt
  it("Bug #43201 (Crash on using uninitialized vals and __get/__set)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __get($k) {\n        return null;\n    }\n    function __set($k, $v) {\n        $this->$k = $v;\n    }\n}\n$c = new Foo();\n$c->arr[0][\"k\"] = 1;\n$c->arr[0][\"k2\"] = $ref;\nfor($cnt=0;$cnt<6;$cnt++) {\n    $ref = chop($undef);\n    $c->arr[$cnt][\"k2\"] = $ref;\n}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
