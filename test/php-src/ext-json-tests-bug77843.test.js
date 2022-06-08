// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug77843.phpt
  it("Bug #77843: Use after free with json serializer", function () {
    expect(parser.parseCode("<?php\nclass X implements JsonSerializable {\n    public $prop = \"value\";\n    public function jsonSerialize(): mixed {\n        global $arr;\n        unset($arr[0]);\n        var_dump($this);\n        return $this;\n    }\n}\n$arr = [new X()];\nvar_dump(json_encode([&$arr]));\n?>")).toMatchSnapshot();
  });
});
