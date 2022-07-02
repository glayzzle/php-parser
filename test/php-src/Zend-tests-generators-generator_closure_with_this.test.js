// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_closure_with_this.phpt
  it("Non-static closures can be generators", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function getGenFactory() {\n        return function() {\n            yield $this;\n        };\n    }\n}\n$genFactory = (new Test)->getGenFactory();\nvar_dump($genFactory()->current());\n?>")).toMatchSnapshot();
  });
});
