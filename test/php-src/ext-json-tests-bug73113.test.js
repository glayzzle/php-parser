// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug73113.phpt
  it("Bug #73113 (Segfault with throwing JsonSerializable)\nAlso test that the custom exception is not wrapped by ext/json", function () {
    expect(parser.parseCode("<?php\nclass JsonSerializableObject implements \\JsonSerializable\n{\n    public function jsonSerialize(): mixed\n    {\n        throw new \\Exception('This error is expected');\n    }\n}\n$obj = new JsonSerializableObject();\ntry {\n    echo json_encode($obj);\n} catch (\\Exception $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
