// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzdeflate_error1.phpt
  it("Test gzdeflate() function : error conditions", function () {
    expect(parser.parseCode("<?php\n/*\n * add a comment here to say what the test is supposed to do\n */\necho \"*** Testing gzdeflate() : error conditions ***\\n\";\n$data = 'string_val';\necho \"\\n-- Testing with incorrect compression level --\\n\";\n$bad_level = 99;\ntry {\n    var_dump(gzdeflate($data, $bad_level));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"\\n-- Testing with incorrect encoding --\\n\";\n$level = 2;\n$bad_encoding = 99;\ntry {\n    var_dump(gzdeflate($data, $level, $bad_encoding));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
