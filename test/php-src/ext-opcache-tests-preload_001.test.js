// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_001.phpt
  it("Preloading basic test", function () {
    expect(parser.parseCode("<?php\nvar_dump(function_exists(\"f1\"));\nvar_dump(function_exists(\"f2\"));\n$rt = true;\ninclude(__DIR__ . \"/preload.inc\");\nvar_dump(function_exists(\"f2\"));\n?>\nOK")).toMatchSnapshot();
  });
});
