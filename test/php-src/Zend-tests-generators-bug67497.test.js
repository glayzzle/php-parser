// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug67497.phpt
  it("Bug #67467: eval with parse error causes segmentation fault in generator", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    $a = 1;\n    yield $a;\n}\ntry {\n    eval('abc');\n} catch (ParseError $ex) {\n}\n$values = gen();\n$values->next();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
