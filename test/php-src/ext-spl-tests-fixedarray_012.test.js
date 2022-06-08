// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fixedarray_012.phpt
  it("SPL: FixedArray: Assigning the object to another variable using []", function () {
    expect(parser.parseCode("<?php\n$a = new SplFixedArray(100);\ntry {\n    $b = &$a[];\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nprint \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
