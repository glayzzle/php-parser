// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/ArrayObject_exchange_array_during_sorting.phpt
  it("Can't use exchangeArray() while ArrayObject is being sorted", function () {
    expect(parser.parseCode("<?php\n$ao = new ArrayObject([1, 2, 3]);\n$i = 0;\n$ao->uasort(function($a, $b) use ($ao, &$i) {\n    if ($i++ == 0) {\n        try {\n            $ao->exchangeArray([4, 5, 6]);\n        } catch (Error $e) {\n            echo $e->getMessage(), \"\\n\";\n        }\n        var_dump($ao);\n    }\n    return $a <=> $b;\n});\n?>")).toMatchSnapshot();
  });
});
