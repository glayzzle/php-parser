// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/json_decode_exceptions.phpt
  it("Test json_decode() function : JSON_THROW_ON_ERROR flag", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(json_decode(\"{\", false, 512, JSON_THROW_ON_ERROR));\n} catch (JsonException $e) {\n    var_dump($e);\n}\n?>")).toMatchSnapshot();
  });
});
