// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug74663.phpt
  it("Bug #74663 (Segfault with opcache.memory_protect and validate_timestamp)", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__ . \"/bug74663.inc\";\nfile_put_contents($file, \"\");\ninclude $file;\nvar_dump(is_file($file));\n?>")).toMatchSnapshot();
  });
});
