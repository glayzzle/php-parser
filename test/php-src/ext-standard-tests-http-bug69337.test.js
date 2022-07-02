// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/http/bug69337.phpt
  it("Bug #69337 (Stream context leaks when http request fails)", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\nfunction stream_notification_callback($notification_code, $severity, $message, $message_code, $bytes_transferred, $bytes_max)\n{\n    if($notification_code == STREAM_NOTIFY_REDIRECTED) {\n      // $http_response_header is now a string, but will be used as an array\n     // by php_stream_url_wrap_http_ex() later on\n       $GLOBALS['http_response_header'] = \"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\\0\\0\\0\\0\";\n    }\n}\n$ctx = stream_context_create();\nstream_context_set_params($ctx, array(\"notification\" => \"stream_notification_callback\"));\n$responses = array(\n    \"data://text/plain,HTTP/1.0 302 Found\\r\\nLocation: /try-again\\r\\n\\r\\n\",\n    \"data://text/plain,HTTP/1.0 404 Not Found\\r\\n\\r\\n\",\n);\n['pid' => $pid, 'uri' => $uri] = http_server($responses, $output);\n$f = file_get_contents($uri, 0, $ctx);\nhttp_server_kill($pid);\nvar_dump($f);\n?>")).toMatchSnapshot();
  });
});
