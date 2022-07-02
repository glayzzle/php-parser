// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug41421.phpt
  it("Bug #41421 (Uncaught exception from a stream wrapper segfaults)", function () {
    expect(parser.parseCode("<?php\nclass wrapper {\n    function stream_open() {\n        return true;\n    }\n    function stream_eof() {\n        throw new exception();\n    }\n}\nstream_wrapper_register(\"wrap\", \"wrapper\");\n$fp = fopen(\"wrap://...\", \"r\");\nfeof($fp);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
