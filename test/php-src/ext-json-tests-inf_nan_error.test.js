// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/inf_nan_error.phpt
  it("An error is thrown when INF or NaN are encoded", function () {
    expect(parser.parseCode("<?php\n$inf = INF;\nvar_dump($inf);\nvar_dump(json_encode($inf));\nvar_dump(json_last_error(), json_last_error_msg());\nvar_dump(json_encode($inf, JSON_PARTIAL_OUTPUT_ON_ERROR));\nvar_dump(json_last_error(), json_last_error_msg());\necho \"\\n\";\n$nan = NAN;\nvar_dump($nan);\nvar_dump(json_encode($nan));\nvar_dump(json_last_error(), json_last_error_msg());\nvar_dump(json_encode($nan, JSON_PARTIAL_OUTPUT_ON_ERROR));\nvar_dump(json_last_error(), json_last_error_msg());\n?>")).toMatchSnapshot();
  });
});
