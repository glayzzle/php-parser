// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/deflate_add_error.phpt
  it("Test incremental deflate_add() error functionality", function () {
    expect(parser.parseCode("<?php\n$badResource = fopen(\"php://memory\", \"r+\");\ntry {\n    var_dump(deflate_add($badResource, \"test\"));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$resource = deflate_init(ZLIB_ENCODING_DEFLATE);\n$badFlushType = 6789;\ntry {\n    var_dump(deflate_add($resource, \"test\", $badFlushType));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
