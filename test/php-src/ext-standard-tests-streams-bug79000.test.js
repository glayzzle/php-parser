// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug79000.phpt
  it("Bug #79000: Non-blocking socket stream reports EAGAIN as error", function () {
    expect(parser.parseCode("<?php\n[$sock1, $sock2] = stream_socket_pair(STREAM_PF_UNIX, STREAM_SOCK_STREAM, STREAM_IPPROTO_IP);\n$str = str_repeat('a', 1000000);\nstream_set_blocking($sock1, false);\nvar_dump(fwrite($sock1, $str));\nvar_dump(fwrite($sock1, $str));\n?>")).toMatchSnapshot();
  });
});
