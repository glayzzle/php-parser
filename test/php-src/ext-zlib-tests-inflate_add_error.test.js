// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/inflate_add_error.phpt
  it("Test incremental inflate_add() error functionality", function () {
    expect(parser.parseCode("<?php\n$badResource = fopen(\"php://memory\", \"r+\");\ntry {\n    var_dump(inflate_add($badResource, \"test\"));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$resource = inflate_init(ZLIB_ENCODING_DEFLATE);\n$badFlushType = 6789;\ntry {\n    var_dump(inflate_add($resource, \"test\", $badFlushType));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
