// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug70470.phpt
  it("Bug #70470 (Built-in server truncates headers spanning over TCP packets)", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start(\"var_dump(getAllheaders());\");\n$fp = php_cli_server_connect();\nfwrite($fp, \"GET / HTTP/1.1\\r\\n\");\nfwrite($fp, \"Host: \" . PHP_CLI_SERVER_HOSTNAME . \"\\r\\n\");\nfwrite($fp, \"Content\");\nfflush($fp);\nusleep(200000);\nfwrite($fp, \"-Type: text/html; charset=UTF-8\\r\\n\");\nfwrite($fp, \"Connection: clo\");\nfflush($fp);\nusleep(200000);\nfwrite($fp, \"se\\r\\n\\r\\n\");\nwhile (!feof($fp)) {\n    echo fgets($fp);\n}\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
