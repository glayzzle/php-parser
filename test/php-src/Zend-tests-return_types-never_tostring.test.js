// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/never_tostring.phpt
  it("never type of __toString method", function () {
    expect(parser.parseCode("<?php\nclass A implements Stringable {\n    public function __toString(): string {\n        return \"hello\";\n    }\n}\nclass B extends A {\n    public function __toString(): never {\n        throw new \\Exception('not supported');\n    }\n}\ntry {\n    echo (string) (new B());\n} catch (Exception $e) {\n    // do nothing\n}\necho \"done\";\n?>")).toMatchSnapshot();
  });
});
