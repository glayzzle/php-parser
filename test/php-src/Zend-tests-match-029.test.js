// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/029.phpt
  it("Test long match with undefined variable", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function ($errno, $message) {\n    throw new Exception(\"Custom error handler: $message\");\n});\necho match ($undefVar) {\n   default => \"This should not get printed with or without opcache\\n\",\n   1, 2, 3, 4, 5 => \"Also should not be printed\\n\",\n};\necho \"unreachable\\n\";\n?>")).toMatchSnapshot();
  });
});
