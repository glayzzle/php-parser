// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug43177.phpt
  it("Bug #61977 Test exit code for various errors", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start(<<<'SCRIPT'\n    ini_set('display_errors', 0);\n    switch($_SERVER[\"REQUEST_URI\"]) {\n            case \"/parse\":\n                    try {\n                        eval(\"this is a parse error\");\n                    } catch (ParseError $e) {\n                    }\n                    echo \"OK\\n\";\n                    break;\n            case \"/fatal\":\n                    eval(\"foo();\");\n                    echo \"OK\\n\";\n                    break;\n            case \"/compile\":\n                    eval(\"class foo { final private final function bar() {} }\");\n                    echo \"OK\\n\";\n                    break;\n            case \"/fatal2\":\n                    foo();\n                    echo \"OK\\n\";\n                    break;\n            default:\n                    return false;\n    }\nSCRIPT\n);\n$host = PHP_CLI_SERVER_HOSTNAME;\nforeach(array(\"parse\", \"fatal\", \"fatal2\", \"compile\") as $url) {\n    $fp = php_cli_server_connect();\n    if(fwrite($fp, <<<HEADER\nGET /$url HTTP/1.1\nHost: {$host}\nHEADER\n)) {\n        while (!feof($fp)) {\n                echo fgets($fp);\n        }\n    }\n}\n?>")).toMatchSnapshot();
  });
});
