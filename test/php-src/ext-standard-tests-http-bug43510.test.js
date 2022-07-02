// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/http/bug43510.phpt
  it("Bug #43510 (stream_get_meta_data() does not return same mode as used in fopen)", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$responses = array(\n    \"data://text/plain,HTTP/1.0 200 OK\\r\\n\\r\\n\",\n    \"data://text/plain,HTTP/1.0 200 OK\\r\\n\\r\\n\",\n);\n['pid' => $pid, 'uri' => $uri ] = http_server($responses, $output);\nforeach(array('r', 'rb') as $mode) {\n    $fd = fopen($uri, $mode, false);\n    $meta = stream_get_meta_data($fd);\n    var_dump($meta['mode']);\n    fclose($fd);\n}\nhttp_server_kill($pid);\n?>")).toMatchSnapshot();
  });
});
