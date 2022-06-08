// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/007.phpt
  it("json_last_error() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(json_decode(\"[1]\"));\nvar_dump(json_last_error(), json_last_error_msg());\nvar_dump(json_decode(\"[[1]]\", false, 2));\nvar_dump(json_last_error(), json_last_error_msg());\nvar_dump(json_decode(\"[1}\"));\nvar_dump(json_last_error(), json_last_error_msg());\nvar_dump(json_decode('[\"' . chr(0) . 'abcd\"]'));\nvar_dump(json_last_error(), json_last_error_msg());\nvar_dump(json_decode(\"[1\"));\nvar_dump(json_last_error(), json_last_error_msg());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
