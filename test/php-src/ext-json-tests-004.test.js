// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/004.phpt
  it("json_encode() & endless loop - 2", function () {
    expect(parser.parseCode("<?php\n$a = new stdclass;\n$a->prop = $a;\nvar_dump($a);\necho \"\\n\";\nvar_dump(json_encode($a));\nvar_dump(json_last_error(), json_last_error_msg());\necho \"\\n\";\nvar_dump(json_encode($a, JSON_PARTIAL_OUTPUT_ON_ERROR));\nvar_dump(json_last_error(), json_last_error_msg());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
