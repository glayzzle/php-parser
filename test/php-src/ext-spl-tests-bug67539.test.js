// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug67539.phpt
  it("Bug #67539 (ArrayIterator use-after-free due to object change during sorting)", function () {
    expect(parser.parseCode("<?php\n$it = new ArrayIterator(array_fill(0,2,'X'), 1 );\nfunction badsort($a, $b) {\n    try {\n        $GLOBALS['it']->unserialize($GLOBALS['it']->serialize());\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    return 0;\n}\n$it->uksort('badsort');\n?>")).toMatchSnapshot();
  });
});
