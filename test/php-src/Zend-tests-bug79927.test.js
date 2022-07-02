// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79927.phpt
  it("Bug #79927: Generator doesn't throw exception after multiple yield from iterable", function () {
    expect(parser.parseCode("<?php\n$generator = (function () {\n    yield from [1, 2, 3];\n})();\n$generator->next();\n$generator->next();\ntry {\n    $generator->rewind();\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho $generator->current(), \"\\n\";\n$generator2 = (function () {\n    yield from [];\n    yield 4;\n})();\n$generator2->current();\n$generator2->rewind();\necho $generator2->current(), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
