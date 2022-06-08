// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/inflate_init_error.phpt
  it("Test inflate_init() error", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(inflate_init(42));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
