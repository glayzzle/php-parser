// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/bug48725_2.phpt
  it("Bug #48725 (Support for flushing in zlib stream)", function () {
    expect(parser.parseCode("<?php\n$stream = fopen('data://text/plain;base64,' . base64_encode('Foo bar baz'), \n'r');\nstream_filter_append($stream, 'zlib.deflate', STREAM_FILTER_READ);\nprint bin2hex(stream_get_contents($stream));\n?>")).toMatchSnapshot();
  });
});
