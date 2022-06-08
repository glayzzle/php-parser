// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug61115.phpt
  it("Bug #61115: Stream related segfault on fatal error in php_stream_context_del_link.", function () {
    expect(parser.parseCode("<?php\n$arrayLarge = array_fill(0, 113663, '*');\n$resourceFileTemp = fopen('php://temp', 'r+');\nstream_context_set_params($resourceFileTemp, array());\ntry {\n    preg_replace('', function() {}, $resourceFileTemp);\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
