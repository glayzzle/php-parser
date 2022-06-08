// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/emptyheader.phpt
  it("Correctly handle split and empty header", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start(\"var_dump(getAllheaders());\");\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\nfwrite($fp, \"GET / HTTP/1.1\\r\\nUser-Agent\\r\\nAccept: */*\\r\\nReferer:\\r\\nHi\\r\\n\\r\\n\");\nfflush($fp);\nwhile (!feof($fp)) {\n    echo fgets($fp);\n}\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
