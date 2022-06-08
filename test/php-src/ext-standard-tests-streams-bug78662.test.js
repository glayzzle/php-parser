// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug78662.phpt
  it("Bug #78662 (stream_write bad error detection)", function () {
    expect(parser.parseCode("<?php\nclass FailedStream {\n    function stream_open($path, $mode, $options, &$opened_path)\n    {\n        return true;\n    }\n    function stream_read($count)\n    {\n        return false;\n    }\n    function stream_write($data)\n    {\n        return false;\n    }\n    function stream_stat()\n    {\n        return [];\n    }\n}\nstream_wrapper_register('fails', 'FailedStream');\n$f=fopen('fails://foo', 'a+');\nvar_dump(fwrite($f, \"bar\"));\nvar_dump(fread($f, 100));\n?>\nDone")).toMatchSnapshot();
  });
});
