// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fixedarray_006.phpt
  it("SPL: FixedArray: Assigning objects", function () {
    expect(parser.parseCode("<?php\n$b = 10000;\n$a = new SplFixedArray($b);\ntry {\n    for ($i = 0; $i < 100; $i++) {\n        $a[] = new stdClass;\n    }\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nprint \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
