// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_substr_error2.phpt
  it("Test mb_substr() function : error conditions - Pass an unknown encoding", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass an unknown encoding to mb_substr() to test behaviour\n */\necho \"*** Testing mb_substr() : error conditions ***\\n\";\n$str = 'Hello, world';\n$start = 1;\n$length = 5;\n$encoding = 'unknown-encoding';\ntry {\n    var_dump( mb_substr($str, $start, $length, $encoding));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
