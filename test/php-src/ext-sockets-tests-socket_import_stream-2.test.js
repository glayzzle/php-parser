// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_import_stream-2.phpt
  it("socket_import_stream: Bad arguments", function () {
    expect(parser.parseCode("<?php\nvar_dump(socket_import_stream(fopen(__FILE__, \"rb\")));\ntry {\n    socket_import_stream(socket_create(AF_INET, SOCK_DGRAM, SOL_UDP));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$s = stream_socket_server(\"udp://127.0.0.1:0\", $errno, $errstr, STREAM_SERVER_BIND);\nvar_dump($s);\nvar_dump(fclose($s));\ntry {\n    socket_import_stream($s);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done.\";\n?>")).toMatchSnapshot();
  });
});
