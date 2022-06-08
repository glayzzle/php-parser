// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fixedarray_013.phpt
  it("SPL: FixedArray: Passing the object using [] as parameter", function () {
    expect(parser.parseCode("<?php\n$a = new SplFixedArray(100);\nfunction test(SplFixedArray &$arr) {\n    print \"ok\\n\";\n}\ntry {\n    test($a[]);\n} catch (\\Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
