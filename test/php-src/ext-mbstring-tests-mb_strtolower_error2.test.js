// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_strtolower_error2.phpt
  it("Test mb_strtolower() function : error conditions - pass an unknown encoding", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass an unknown encoding to mb_strtolower() to test behaviour\n */\necho \"*** Testing mb_strtolower() : error conditions***\\n\";\n$sourcestring = 'hello, world';\n$encoding = 'unknown-encoding';\ntry {\n    var_dump( mb_strtolower($sourcestring, $encoding) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
