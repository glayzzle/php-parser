// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_internal_encoding_error2.phpt
  it("Test mb_internal_encoding() function : error conditions - pass an unknown encoding", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass mb_internal_encoding an unknown encoding\n */\necho \"*** Testing mb_internal_encoding() : error conditions ***\\n\";\ntry {\n    var_dump(mb_internal_encoding('unknown-encoding'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
