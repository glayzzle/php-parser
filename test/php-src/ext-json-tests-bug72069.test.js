// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug72069.phpt
  it("Bug #72069 (Behavior \\JsonSerializable different from json_encode)", function () {
    expect(parser.parseCode("<?php\n$result = json_encode(['end' => json_decode('', true)]);\nvar_dump($result);\nclass A implements \\JsonSerializable\n{\n    function jsonSerialize(): mixed\n    {\n        return ['end' => json_decode('', true)];\n    }\n}\n$a = new A();\n$toJsonData = $a->jsonSerialize();\n$result = json_encode($a);\nvar_dump($result);\n$result = json_encode($toJsonData);\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
