// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/upload_2G.phpt
  it("file upload greater than 2G", function () {
    expect(parser.parseCode("<?php\necho \"Test\\n\";\ninclude \"php_cli_server.inc\";\nphp_cli_server_start(\"var_dump(\\$_FILES);\", null,\n    [\"-d\", \"post_max_size=3G\", \"-d\", \"upload_max_filesize=3G\"]);\n$length = 2150000000;\n$output = \"\";\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\n$prev = \"----123\nContent-Type: text/plain; charset=UTF-8\nContent-Disposition: form-data; name=\\\"file1\\\"; filename=\\\"file1.txt\\\"\\n\\n\";\n$post = \"\\n----123--\\n\";\n$total = $length + strlen($prev) + strlen($post);\nfwrite($fp, <<<EOF\nPOST /index.php HTTP/1.1\nHost: {$host}\nContent-Type: multipart/form-data; boundary=--123\nContent-Length: {$total}\n{$prev}\nEOF\n) or die(\"write prev failed\");\n$data = str_repeat(\"0123456789\", 10000);\nfor ($i = 0; $i < $length; $i += 10000 * 10) {\n    fwrite($fp, $data) or die(\"write failed @ ($i)\");\n}\nfwrite($fp, $post) or die(\"write post failed\");\nwhile (!feof($fp)) {\n    $output .= fgets($fp);\n}\necho $output;\nfclose($fp);\n?>\nDone")).toMatchSnapshot();
  });
});
