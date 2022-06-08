// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug81607.phpt
  it("Bug #81607: CE_CACHE allocation with concurrent access", function () {
    expect(parser.parseCode("<?php\n$pid = pcntl_fork();\nif ($pid == 0) {\n    // Child: Declare class FooBar {} to allocate CE cache slot.\n    require __DIR__ . '/bug81607.inc';\n} else if ($pid > 0) {\n    pcntl_wait($status);\n    var_dump(new FooBar);\n} else {\n    echo \"pcntl_fork() failed\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
