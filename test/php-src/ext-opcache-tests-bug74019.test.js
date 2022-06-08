// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug74019.phpt
  it("Bug #74019\t(Segfault with list)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function seg() {\n        list($a, $b) = A::CONSTS;\n        var_dump($a, $b);\n        return;\n    }\n    const CONSTS = [1, 2];\n}\n$a = new A;\n$a->seg();\n?>")).toMatchSnapshot();
  });
});
