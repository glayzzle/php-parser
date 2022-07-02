// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/stream_rfc2397_006.phpt
  it("Stream: RFC2397 with corrupt? payload", function () {
    expect(parser.parseCode("<?php\n$streams = array(\n    \"data:;base64,\\0Zm9vYmFyIGZvb2Jhcg==\",\n    \"data:;base64,Zm9vYmFy\\0IGZvb2Jhcg==\",\n    'data:;base64,#Zm9vYmFyIGZvb2Jhcg==',\n    'data:;base64,#Zm9vYmFyIGZvb2Jhc=',\n    );\nforeach($streams as $stream)\n{\n    try {\n        var_dump(file_get_contents($stream));\n    } catch (ValueError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
