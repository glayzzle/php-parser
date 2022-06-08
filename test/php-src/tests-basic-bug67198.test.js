// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/bug67198.phpt
  it("php://input is empty when enable_post_data_reading=Off", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/../../sapi/cli/tests/php_cli_server.inc\";\n$code =\n<<<'FL'\n if(!ini_get('enable_post_data_reading')){\n  if($_SERVER['REQUEST_METHOD']=='POST'){\n   exit(file_get_contents('php://input'));\n  }\n }else{\n  exit('Please SET php.ini: enable_post_data_reading = Off');\n }\nFL;\n$postdata = \"PASS\";\n$opts = array('http' =>\n    array(\n        'method'  => 'POST',\n        'header'  => 'Content-type: application/x-www-form-urlencoded',\n        'content' => $postdata\n    )\n);\n$context  = stream_context_create($opts);\nphp_cli_server_start(\n    \"exit(file_get_contents('php://input'));\", null,\n    [\"-d\", \"enable_post_data_reading=Off\"]);\nvar_dump(file_get_contents(\"http://\" . PHP_CLI_SERVER_ADDRESS, false, $context));\nvar_dump(file_get_contents(\"http://\" . PHP_CLI_SERVER_ADDRESS, false, $context));\n?>")).toMatchSnapshot();
  });
});
