// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug68532.phpt
  it("Bug #68532: convert.base64-encode omits padding bytes", function () {
    expect(parser.parseCode("<?php\n$testString = 'test';\n$stream = fopen('php://memory','r+');\nfwrite($stream, $testString);\nrewind($stream);\n$filter = stream_filter_append($stream, 'convert.base64-encode');\necho \"memoryStream = \" . stream_get_contents($stream).PHP_EOL;\n$fileStream = fopen(__DIR__ . '/base64test.txt','w+');\nfwrite($fileStream , $testString);\nrewind($fileStream );\n$filter = stream_filter_append($fileStream , 'convert.base64-encode');\necho \"fileStream = \" . stream_get_contents($fileStream ).PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
