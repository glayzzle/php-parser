// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/bug24142.phpt
  it("Bug #24142 (round() problems)", function () {
    expect(parser.parseCode("<?php\n$v = 0.005;\nfor ($i = 1; $i < 10; $i++) {\n    echo \"round({$v}, 2) -> \".round($v, 2).\"\\n\";\n    $v += 0.01;\n}\n?>")).toMatchSnapshot();
  });
});
