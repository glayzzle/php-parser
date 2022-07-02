// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fgets_socket_variation2.phpt
  it("fgets() over a socket with more than a buffer's worth of data", function () {
    expect(parser.parseCode("<?php\n// create a file\n$filename = __FILE__ . \".tmp\";\n$fd = fopen($filename, \"w+\");\n// populate the file with lines of data\ndefine(\"LINE_OF_DATA\", \"12345678\\n\");\nfor ($i = 0; $i < 1000; $i++) {\n    fwrite($fd, LINE_OF_DATA);\n}\nfclose($fd);\nfor ($i=0; $i<100; $i++) {\n  $port = rand(10000, 65000);\n  /* Setup socket server */\n  $server = @stream_socket_server(\"tcp://127.0.0.1:$port\");\n  if ($server) {\n    break;\n  }\n}\n/* Connect to it */\n$client = fsockopen(\"tcp://127.0.0.1:$port\");\nif (!$client) {\n    die(\"Unable to create socket\");\n}\n/* Accept that connection */\n$socket = stream_socket_accept($server);\necho \"Write data from the file:\\n\";\n$data = file_get_contents($filename);\nunlink($filename);\nvar_dump(fwrite($socket, $data));\nfclose($socket);\necho \"\\nRead lines from the client\\n\";\nwhile ($line = fgets($client,256)) {\n    if (strcmp($line, LINE_OF_DATA) != 0) {\n        echo \"Error - $line does not match \" . LINE_OF_DATA;\n        break;\n    }\n}\necho \"\\nClose the server side socket and read the remaining data from the client\\n\";\nfclose($server);\nwhile(!feof($client)) {\n    fread($client, 1);\n}\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
