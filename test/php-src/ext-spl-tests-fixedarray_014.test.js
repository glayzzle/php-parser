// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fixedarray_014.phpt
  it("SPL: FixedArray: Trying to access inexistent item", function () {
    expect(parser.parseCode("<?php\ntry {\n    $a = new SplFixedArray(0);\n    echo $a[0]++;\n} catch (Exception $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
