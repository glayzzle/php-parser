// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/stream_rfc2397_004.phpt
  it("Stream: RFC2397 Mozilla tests", function () {
    expect(parser.parseCode("<?php\n$streams = array(\n    'data://,;test',\n    'data://text/plain,test',\n    'data://text/plain;charset=US-ASCII,test',\n    'data://;charset=UTF-8,Hello',\n    'data://text/plain;charset=UTF-8,Hello',\n    'data://,a,b',\n    );\nforeach($streams as $stream)\n{\n    var_dump(@file_get_contents($stream));\n}\n?>")).toMatchSnapshot();
  });
});
