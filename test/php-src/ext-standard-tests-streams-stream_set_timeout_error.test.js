// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_set_timeout_error.phpt
  it("Test stream_set_timeout() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing stream_set_timeout() : error conditions ***\\n\";\nfor ($i=0; $i<100; $i++) {\n  $port = rand(10000, 65000);\n  /* Setup socket server */\n  $server = @stream_socket_server(\"tcp://127.0.0.1:$port\");\n  if ($server) {\n    break;\n  }\n}\n/* Connect to it */\n$client = fsockopen(\"tcp://127.0.0.1:$port\");\n$seconds = 10;\n$microseconds = 10;\necho \"\\n-- Testing stream_set_timeout() function with a closed socket --\\n\";\nfclose($client);\ntry {\n    var_dump( stream_set_timeout($client, $seconds) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"\\n-- Testing stream_set_timeout() function with a stream that does not support timeouts --\\n\";\n$filestream = fopen(__FILE__, \"r\");\nvar_dump( stream_set_timeout($filestream, $seconds) );\nfclose($filestream);\nfclose($server);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
