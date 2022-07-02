// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug24063.phpt
  it("Bug #24063 (serialize() missing 0 after the . on scientific notation)", function () {
    expect(parser.parseCode("<?php\n$v = 1;\nfor ($i = 1; $i < 10; $i++) {\n    $v /= 10;\n    echo \"{$v} \".unserialize(serialize($v)).\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
