// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug66025.phpt
  it("Bug #66025 (Indent wrong when json_encode() called from jsonSerialize function)", function () {
    expect(parser.parseCode("<?php\nclass Foo implements JsonSerializable {\n    public function jsonSerialize(): mixed {\n        return json_encode([1], JSON_PRETTY_PRINT);\n    }\n}\necho json_encode([new Foo]), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
