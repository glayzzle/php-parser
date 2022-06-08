// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/range_bug70239_0.phpt
  it("Bug #70239 Creating a huge array doesn't result in exhausted, but segfault, var 1", function () {
    expect(parser.parseCode("<?php\ntry {\n    range(0, pow(2.0, 100000000));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
