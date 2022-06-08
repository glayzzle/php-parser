// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_multi_getcontent_basic3.phpt
  it("Curl_multi_getcontent() basic test with different sources (local file/http)", function () {
    expect(parser.parseCode("<?php\n    //CURL_MULTI_GETCONTENT TEST\n    //CREATE RESOURCES\n    $ch1=curl_init();\n    $ch2=curl_init();\n    //SET URL AND OTHER OPTIONS\n    include 'server.inc';\n    $host = curl_cli_server_start();\n    curl_setopt($ch1, CURLOPT_URL, \"{$host}/get.inc?test=getpost&get_param=Hello%20World\");\n    curl_setopt($ch2, CURLOPT_URL, \"file://\".__DIR__. DIRECTORY_SEPARATOR . \"curl_testdata2.txt\");\n    curl_setopt($ch1, CURLOPT_RETURNTRANSFER, true);\n    curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);\n    //CREATE MULTIPLE CURL HANDLE\n    $mh=curl_multi_init();\n    //ADD THE 2 HANDLES\n    curl_multi_add_handle($mh,$ch1);\n    curl_multi_add_handle($mh,$ch2);\n    //EXECUTE\n    $running=0;\n    do {\n        curl_multi_exec($mh,$running);\n    } while ($running>0);\n    $results1=curl_multi_getcontent($ch1);\n        $results2=curl_multi_getcontent($ch2);\n    //CLOSE\n    curl_multi_remove_handle($mh,$ch1);\n    curl_multi_remove_handle($mh,$ch2);\n    curl_multi_close($mh);\n    echo $results1;\n    echo $results2;\n?>")).toMatchSnapshot();
  });
});
