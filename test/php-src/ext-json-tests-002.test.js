// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/002.phpt
  it("json_encode() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(json_encode(\"\"));\nvar_dump(json_encode(NULL));\nvar_dump(json_encode(TRUE));\nvar_dump(json_encode(array(\"\"=>\"\")));\nvar_dump(json_encode(array(array(1))));\nvar_dump(json_encode(array()));\nvar_dump(json_encode(array(\"\"=>\"\"), JSON_FORCE_OBJECT));\nvar_dump(json_encode(array(array(1)), JSON_FORCE_OBJECT));\nvar_dump(json_encode(array(), JSON_FORCE_OBJECT));\nvar_dump(json_encode(1));\nvar_dump(json_encode(\"руссиш\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
