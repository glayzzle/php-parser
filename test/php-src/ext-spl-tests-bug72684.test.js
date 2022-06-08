// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug72684.phpt
  it("Bug #72684 (AppendIterator segfault with closed generator)", function () {
    expect(parser.parseCode("<?php\nfunction createGenerator() { yield 1; }\n$generator = createGenerator();\n$appendIterator = new AppendIterator();\n$appendIterator->append($generator);\niterator_to_array($appendIterator);\ntry {\n    iterator_to_array($appendIterator);\n} catch (\\Exception $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
