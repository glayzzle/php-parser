// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug44827.phpt
  it("Bug #44827 (define() allows :: in constant names)", function () {
    expect(parser.parseCode("<?php\ntry {\n    define('foo::bar', 1);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    define('::', 1);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
