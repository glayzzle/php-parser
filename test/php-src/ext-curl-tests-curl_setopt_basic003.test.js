// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_setopt_basic003.phpt
  it("curl_setopt() call with CURLOPT_HTTPHEADER", function () {
    expect(parser.parseCode("<?php\ninclude 'server.inc';\n$host = curl_cli_server_start();\n// start testing\necho \"*** curl_setopt() call with CURLOPT_HTTPHEADER\\n\";\n$url = \"{$host}/\";\n$ch = curl_init();\ntry {\n    curl_setopt($ch, CURLOPT_HTTPHEADER, 1);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$curl_content = curl_exec($ch);\ncurl_close($ch);\nvar_dump( $curl_content );\n$ch = curl_init();\nob_start(); // start output buffering\ncurl_setopt($ch, CURLOPT_HTTPHEADER, array());\ncurl_setopt($ch, CURLOPT_URL, $host);\n$curl_content = curl_exec($ch);\nob_end_clean();\ncurl_close($ch);\nvar_dump( $curl_content );\n?>")).toMatchSnapshot();
  });
});
