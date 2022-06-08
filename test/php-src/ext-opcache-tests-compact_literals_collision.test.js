// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/compact_literals_collision.phpt
  it("Collision between string and float literals during compaction", function () {
    expect(parser.parseCode("<?php\nvar_dump(\"\\0\\0\\0\\0\\0\\0\\0\\0\");\nvar_dump(0.0);\nvar_dump(\"\\0\\0\\0\\0\\0\\0\\0\\0\");\nvar_dump(0.0);\n?>")).toMatchSnapshot();
  });
});
