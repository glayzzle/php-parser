// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_strlen_error2.phpt
  it("Test mb_strlen() function : error conditions - pass an unknown encoding", function () {
    expect(parser.parseCode("<?php\n/*\n * Test mb_strlen when passed an unknown encoding\n */\necho \"*** Testing mb_strlen() : error ***\\n\";\n$string = 'abcdef';\n$encoding = 'unknown-encoding';\ntry {\n    var_dump(mb_strlen($string, $encoding));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
