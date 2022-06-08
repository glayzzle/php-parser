// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug61371-unix.phpt
  it("Bug #61371: stream_context_create() causes memory leaks on use streams_socket_create", function () {
    expect(parser.parseCode("<?php\nfunction test($doFclose) {\n$previous = null;\n$current = null;\nfor($test=1;$test<=3;$test++) {\n    $current = memory_get_usage(true);\n    if (!is_null($previous)) {\n        var_dump($previous == $current);\n    }\n    $previous = $current;\n    echo 'memory: '.round($current / 1024, 0).\"kb\\n\";\n    for($i=0;$i<=100;$i++) {\n        $context = stream_context_create(array());\n        $stream = stream_socket_client('udp://0.0.0.0:80', $errno, $errstr, 10, STREAM_CLIENT_CONNECT, $context);\n        if ($doFclose) fclose($stream);\n        unset($context);\n        unset($stream);\n        unset($errno);\n        unset($errstr);\n    }\n}\n}\ntest(true);\ntest(false);\n?>")).toMatchSnapshot();
  });
});
