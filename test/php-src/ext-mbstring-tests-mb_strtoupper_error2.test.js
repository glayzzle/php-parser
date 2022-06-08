// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_strtoupper_error2.phpt
  it("Test mb_strtoupper() function : error conditions - pass an unknown encoding", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass an unknown encoding as $encoding argument to check behaviour of mbstrtoupper()\n */\necho \"*** Testing mb_strtoupper() : error conditions ***\\n\";\n$sourcestring = 'hello, world';\n$encoding = 'unknown-encoding';\ntry {\n    var_dump( mb_strtoupper($sourcestring, $encoding) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
