// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_002.phpt
  it("Testing exception and GOTO", function () {
    expect(parser.parseCode("<?php\ngoto foo;\ntry {\n    print 1;\n    foo:\n    print 2;\n} catch (Exception $e) {\n}\n?>")).toMatchSnapshot();
  });
});
