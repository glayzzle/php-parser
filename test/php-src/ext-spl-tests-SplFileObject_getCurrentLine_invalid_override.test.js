// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_getCurrentLine_invalid_override.phpt
  it("Invalid SplFileObject::getCurrentLine() return type", function () {
    expect(parser.parseCode("<?php\nclass MySplFileObject extends SplFileObject {\n    #[ReturnTypeWillChange]\n    public function getCurrentLine(): array {\n        return [1, 2, 3];\n    }\n}\n$obj = new MySplFileObject(__FILE__);\ntry {\n    var_dump($obj->current());\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
