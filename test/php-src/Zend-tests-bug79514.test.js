// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79514.phpt
  it("Bug #79514 (Memory leaks while including unexistent file)", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . '/bug79514.doesnotexist';\n@include $filename;\n// Further include should not increase memory usage.\n$mem1 = memory_get_usage();\n@include $filename;\n$mem2 = memory_get_usage();\nvar_dump($mem1 == $mem2);\n?>")).toMatchSnapshot();
  });
});
