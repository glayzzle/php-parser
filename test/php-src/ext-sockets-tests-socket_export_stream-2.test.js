// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_export_stream-2.phpt
  it("socket_export_stream: Bad arguments", function () {
    expect(parser.parseCode("<?php\ntry {\n    socket_export_stream(fopen(__FILE__, \"rb\"));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    socket_export_stream(stream_socket_server(\"udp://127.0.0.1:0\", $errno, $errstr, STREAM_SERVER_BIND));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$s = socket_create(AF_INET, SOCK_DGRAM, SOL_UDP);\nvar_dump($s);\nsocket_close($s);\ntry {\n    var_dump(socket_export_stream($s));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done.\";\n?>")).toMatchSnapshot();
  });
});
