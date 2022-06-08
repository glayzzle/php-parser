// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug72857.phpt
  it("Bug #72857 stream_socket_recvfrom read access violation", function () {
    expect(parser.parseCode("<?php\n    $fname = __DIR__ . DIRECTORY_SEPARATOR . \"stream_socket_recvfrom.tmp\";\n    $fp0 = fopen($fname, 'w');\n    $v2=10;\n    $v3=STREAM_PEEK;\n    $v4=\"A\";\n    var_dump(stream_socket_recvfrom($fp0,$v2,$v3,$v4), $v4);\n    fclose($fp0);\n    unlink($fname);\n?>")).toMatchSnapshot();
  });
});
