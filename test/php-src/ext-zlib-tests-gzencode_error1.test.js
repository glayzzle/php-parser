// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzencode_error1.phpt
  it("Test gzencode() function : error conditions", function () {
    expect(parser.parseCode("<?php\n/*\n * Test error cases for gzencode\n */\necho \"*** Testing gzencode() : error conditions ***\\n\";\n$data = 'string_val';\n$level = 2;\n$encoding_mode = FORCE_DEFLATE;\necho \"\\n-- Testing with incorrect compression level --\\n\";\n$bad_level = 99;\ntry {\n    var_dump(gzencode($data, $bad_level));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"\\n-- Testing with incorrect encoding_mode --\\n\";\n$bad_mode = 99;\ntry {\n    var_dump(gzencode($data, $level, $bad_mode));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
