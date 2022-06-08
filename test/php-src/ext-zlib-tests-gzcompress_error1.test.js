// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzcompress_error1.phpt
  it("Test gzcompress() function : error conditions", function () {
    expect(parser.parseCode("<?php\n/*\n * add a comment here to say what the test is supposed to do\n */\necho \"*** Testing gzcompress() : error conditions ***\\n\";\necho \"\\n-- Testing with incorrect compression level --\\n\";\n$data = 'string_val';\n$bad_level = 99;\ntry {\n    var_dump(gzcompress($data, $bad_level));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"\\n-- Testing with invalid encoding --\\n\";\n$data = 'string_val';\n$level = 2;\n$encoding = 99;\ntry {\n    var_dump(gzcompress($data, $level, $encoding));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
