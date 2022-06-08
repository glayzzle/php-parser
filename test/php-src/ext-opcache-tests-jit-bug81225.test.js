// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bug81225.phpt
  it("Bug #81225: Wrong result with pow operator with JIT enabled", function () {
    expect(parser.parseCode("<?php\nfunction unsignedLong(int $offset): int\n{\n    $normalizedOffset = $offset % (2 ** 32);\n    if ($normalizedOffset < 0) {\n        $normalizedOffset += 2 ** 32;\n    }\n    return $normalizedOffset;\n}\n$offset = -0x100000000 + 2;\nfor ($i = 0; $i < 200; ++$i) {\n    assert(unsignedLong($offset) === 2);\n}\n?>\nOK")).toMatchSnapshot();
  });
});
