// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_stripos_error2.phpt
  it("Test mb_stripos() function : error conditions - Pass unknown encoding", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass an unknown encoding to mb_stripos() to test behaviour\n */\necho \"*** Testing mb_stripos() : error conditions ***\\n\";\n$haystack = 'Hello, world';\n$needle = 'world';\n$offset = 2;\n$encoding = 'unknown-encoding';\ntry {\n    var_dump( mb_stripos($haystack, $needle, $offset, $encoding) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
