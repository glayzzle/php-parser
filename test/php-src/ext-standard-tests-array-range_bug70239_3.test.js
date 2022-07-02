// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/range_bug70239_3.phpt
  it("Bug #70239 Creating a huge array doesn't result in exhausted, but segfault, var 4", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(range(PHP_INT_MIN, 0));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
