// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79657.phpt
  it("Bug #79657: \"yield from\" hangs when invalid value encountered", function () {
    expect(parser.parseCode("<?php\nfunction throwException(): iterable\n{\n    throw new Exception();\n}\nfunction loop(): iterable\n{\n    $callbacks = [\n        function () {\n            yield 'first';\n        },\n        function () {\n            yield from throwException();\n        }\n    ];\n    foreach ($callbacks as $callback) {\n        yield from $callback();\n    }\n}\nfunction get(string $first, int $second): array\n{\n    return [];\n}\nget(...loop());\n?>")).toMatchSnapshot();
  });
});
