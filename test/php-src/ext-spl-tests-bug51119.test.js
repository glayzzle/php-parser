// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug51119.phpt
  it("SPL: LimitIterator zero is valid offset", function () {
    expect(parser.parseCode("<?php\n$array = array('a', 'b', 'c');\n$arrayIterator = new ArrayIterator($array);\n$limitIterator = new LimitIterator($arrayIterator, 0);\nforeach ($limitIterator as $item) {\n    echo $item . \"\\n\";\n}\ntry {\n    $limitIterator = new LimitIterator($arrayIterator, -1);\n} catch (\\ValueError $e){\n    print $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
