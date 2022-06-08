// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug79441.phpt
  it("Bug #79441 Segfault in mb_chr() if internal encoding is unsupported", function () {
    expect(parser.parseCode("<?php\nmb_internal_encoding(\"utf-7\");\ntry {\n    mb_chr(0xd800);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
