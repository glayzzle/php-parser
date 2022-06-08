// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_select_null_usec.phpt
  it("stream_select allows null for microsecond timeout if timeout is null", function () {
    expect(parser.parseCode("<?php\n$read = [fopen(__FILE__, 'r')];\n$write = null;\n$except = null;\nerror_reporting(-1);\nset_error_handler(function ($errno, $errstr) {\n    print $errno . \" \" . $errstr . \"\\n\";\n});\nstream_select($read, $write, $except, null, null);\nvar_dump($read);\nprint \"\\n\";\nstream_select($read, $write, $except, null, 0);\nstream_select($read, $write, $except, null, 1);\n?>")).toMatchSnapshot();
  });
});
