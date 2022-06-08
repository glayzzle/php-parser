// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fixedarray_004.phpt
  it("SPL: FixedArray: adding new elements", function () {
    expect(parser.parseCode("<?php\n$a = new SplFixedArray(10);\ntry {\n    $a[] = 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
