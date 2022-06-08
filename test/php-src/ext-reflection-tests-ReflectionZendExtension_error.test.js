// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionZendExtension_error.phpt
  it("Test ReflectionZendExtension class errors", function () {
    expect(parser.parseCode("<?php\ntry {\n    new ReflectionZendExtension('zend_opcache');\n} catch (ReflectionException $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
