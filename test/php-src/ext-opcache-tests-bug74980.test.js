// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug74980.phpt
  it("Bug #74980 (Narrowing occurred during type inference)", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    static function foo()\n    {\n        while ($undef) {\n            $arr[][] = NULL;\n        }\n        foreach ($arr as $a) {\n            bar($a + []);\n        }\n    }\n}\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});
