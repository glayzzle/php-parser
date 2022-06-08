// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug64433.phpt
  it("Bug #60180 ($_SERVER[\"PHP_SELF\"] incorrect)", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__.\"/../../../../sapi/cli/tests/php_cli_server.inc\";\nphp_cli_server_start(file_get_contents(__DIR__.'/bug64433_srv.inc'));\necho file_get_contents(\"http://\".PHP_CLI_SERVER_ADDRESS.\"/index.php\");\necho \"default\\n\";\n$codes = array(200, 201, 204, 301, 302, 303, 304, 305, 307, 404, 500);\nforeach($codes as $code) {\n    echo \"$code: \".file_get_contents(\"http://\".PHP_CLI_SERVER_ADDRESS.\"/index.php?status=$code&loc=1\");\n}\necho \"follow=0\\n\";\n$arr = array('http'=>\n                        array(\n                                'follow_location'=>0,\n                        )\n                );\n$context = stream_context_create($arr);\nforeach($codes as $code) {\n    echo \"$code: \".file_get_contents(\"http://\".PHP_CLI_SERVER_ADDRESS.\"/index.php?status=$code&loc=1\", false, $context);\n}\necho \"follow=1\\n\";\n$arr = array('http'=>\n                        array(\n                                'follow_location'=>1,\n                        )\n                );\n$context = stream_context_create($arr);\nforeach($codes as $code) {\n    echo \"$code: \".file_get_contents(\"http://\".PHP_CLI_SERVER_ADDRESS.\"/index.php?status=$code&loc=1\", false, $context);\n}\n?>")).toMatchSnapshot();
  });
});
