// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug72534.phpt
  it("Bug #72534 stream_socket_get_name crashes", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/aa.tmp';\n$fp0 = fopen($fname, 'w');\nvar_dump(stream_socket_get_name($fp0, false));\nvar_dump(stream_socket_get_name($fp0, true));\nfclose($fp0);\n?>")).toMatchSnapshot();
  });
});
