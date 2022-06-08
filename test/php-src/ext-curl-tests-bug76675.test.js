// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug76675.phpt
  it("Bug #76675 (Segfault with H2 server push write/writeheader handlers)", function () {
    expect(parser.parseCode("<?php\n$transfers = 1;\n$callback = function($parent, $passed) use (&$transfers) {\n    curl_setopt($passed, CURLOPT_WRITEFUNCTION, function ($ch, $data) {\n        echo \"Received \".strlen($data);\n        return strlen($data);\n    });\n    $transfers++;\n    return CURL_PUSH_OK;\n};\n$mh = curl_multi_init();\ncurl_multi_setopt($mh, CURLMOPT_PIPELINING, CURLPIPE_MULTIPLEX);\ncurl_multi_setopt($mh, CURLMOPT_PUSHFUNCTION, $callback);\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_URL, 'https://http2.golang.org/serverpush');\ncurl_setopt($ch, CURLOPT_HTTP_VERSION, 3);\ncurl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);\ncurl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\ncurl_multi_add_handle($mh, $ch);\n$active = null;\ndo {\n    $status = curl_multi_exec($mh, $active);\n    do {\n        $info = curl_multi_info_read($mh);\n        if (false !== $info && $info['msg'] == CURLMSG_DONE) {\n            $handle = $info['handle'];\n            if ($handle !== null) {\n                $transfers--;\n                curl_multi_remove_handle($mh, $handle);\n                curl_close($handle);\n            }\n        }\n    } while ($info);\n} while ($transfers);\ncurl_multi_close($mh);\n?>")).toMatchSnapshot();
  });
});
