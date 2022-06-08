// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/deflate_init_error.phpt
  it("Test deflate_init() error", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(deflate_init(42));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(deflate_init(ZLIB_ENCODING_DEFLATE, ['level' => 42]));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(deflate_init(ZLIB_ENCODING_DEFLATE, ['level' => -2]));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(deflate_init(ZLIB_ENCODING_DEFLATE, ['memory' => 0]));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(deflate_init(ZLIB_ENCODING_DEFLATE, ['memory' => 10]));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
