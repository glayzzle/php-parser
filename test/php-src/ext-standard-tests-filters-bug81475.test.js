// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/bug81475.phpt
  it("Bug #81475 (stream_isatty emits warning with attached stream wrapper)", function () {
    expect(parser.parseCode("<?php\n$stdout = fopen('php://stdout', 'wb');\nstream_filter_append($stdout, 'string.toupper');\nvar_dump(stream_isatty($stdout));\n?>")).toMatchSnapshot();
  });
});
