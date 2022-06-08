// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug70198.phpt
  it("Bug #70198 Checking liveness does not work as expected", function () {
    expect(parser.parseCode("<?php\n/* What is checked here is\n    - start a server and listen\n    - as soon as client connects, close connection and exit\n    - on the client side - sleep(1) and check feof()\n*/\n$srv_addr = \"tcp://127.0.0.1:8964\";\n$srv_fl = __DIR__ . \"/bug70198_svr_\" . md5(uniqid()) . \".php\";\n$srv_fl_cont = <<<SRV\n<?php\n\\$socket = stream_socket_server('$srv_addr', \\$errno, \\$errstr);\nif (!\\$socket) {\n    echo \"\\$errstr (\\$errno)\\\\n\";\n} else {\n    if (\\$conn = stream_socket_accept(\\$socket, 3)) {\n        sleep(1);\n        /* just close the connection immediately after accepting,\n            the client side will need wait a bit longer to realize it.*/\n        fclose(\\$conn);\n    }\n    fclose(\\$socket);\n}\nSRV;\nfile_put_contents($srv_fl, $srv_fl_cont);\n$dummy0 = $dummy1 = array();\n$srv_proc = proc_open(PHP_BINARY . \" -n $srv_fl\", $dummy0, $dummy1);\n$i = 0;\n/* wait a bit for the server startup */\nsleep(1);\n$fp = stream_socket_client($srv_addr, $errno, $errstr, 2);\nif (!$fp) {\n    echo \"$errstr ($errno)\\n\";\n} else {\n    stream_set_blocking($fp, 0);\n    sleep(2);\n    while (!feof($fp)) {\n        ++$i;\n    }\n    fclose($fp);\n    var_dump($i);\n}\nproc_close($srv_proc);\nunlink($srv_fl);\n?>")).toMatchSnapshot();
  });
});
