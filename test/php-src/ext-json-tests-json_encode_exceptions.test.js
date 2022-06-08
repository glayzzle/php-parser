// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/json_encode_exceptions.phpt
  it("Test json_encode() function : JSON_THROW_ON_ERROR flag", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(json_encode(\"\\x80\", JSON_THROW_ON_ERROR));\n} catch (JsonException $e) {\n    var_dump($e);\n}\n// JSON_PARTIAL_OUTPUT_ON_ERROR is incompatible with exceptions\n// So it overrides it for the sake of working with wrappers that add the\n// JSON_THROW_ON_ERROR flag\nvar_dump(json_encode(\"\\x80\", JSON_THROW_ON_ERROR | JSON_PARTIAL_OUTPUT_ON_ERROR));\nvar_dump(json_last_error());\nvar_dump(json_last_error_msg());\n?>")).toMatchSnapshot();
  });
});
