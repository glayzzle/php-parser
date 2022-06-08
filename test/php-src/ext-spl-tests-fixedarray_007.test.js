// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fixedarray_007.phpt
  it("SPL: FixedArray: Assigning the itself object", function () {
    expect(parser.parseCode("<?php\n$b = 10;\n$a = new SplFixedArray($b);\ntry {\n    $a[1] = $a;\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nforeach ($a as $c) {\n    if ($c) {\n        echo $c->getSize(), \"\\n\";\n    }\n}\nprint \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
