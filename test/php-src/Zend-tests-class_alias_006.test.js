// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_alias_006.phpt
  it("Testing creation of alias to an internal class", function () {
    expect(parser.parseCode("<?php\ntry {\n    class_alias('stdclass', 'foo');\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
