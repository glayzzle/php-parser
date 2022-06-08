// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_uksort_error1.phpt
  it("Test ArrayObject::uksort() function : wrong arg count", function () {
    expect(parser.parseCode("<?php\n/* Sort the entries by key using user defined function.\n * Source code: ext/spl/spl_array.c\n * Alias to functions:\n */\n$ao = new ArrayObject();\ntry {\n    $ao->uksort();\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $ao->uksort(1,2);\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
