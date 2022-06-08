// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/stream_supports_lock.phpt
  it("stream_supports_lock", function () {
    expect(parser.parseCode("<?php\n$fp = fopen(__FILE__, \"r\");\nvar_dump($fp);\nvar_dump(stream_supports_lock($fp));\nfclose($fp);\n$fp = fopen(\"file://\" . __FILE__, \"r\");\nvar_dump($fp);\nvar_dump(stream_supports_lock($fp));\nfclose($fp);\n$fp = fopen(\"php://memory\", \"r\");\nvar_dump($fp);\nvar_dump(stream_supports_lock($fp));\nfclose($fp);\n$fp = fopen('data://text/plain,foobar', 'r');\nvar_dump($fp);\nvar_dump(stream_supports_lock($fp));\nfclose($fp);\n$sock = stream_context_create();\nvar_dump($sock);\ntry {\n    var_dump(stream_supports_lock($sock));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
