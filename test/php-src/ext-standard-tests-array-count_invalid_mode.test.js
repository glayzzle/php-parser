// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/count_invalid_mode.phpt
  it("Test count() function : invalid modes in weak type mode", function () {
    expect(parser.parseCode("<?php\n$modes = [\n    COUNT_NORMAL,\n    COUNT_RECURSIVE,\n    0,\n    1,\n    -1,\n    2,\n    TRUE,\n    FALSE,\n];\nforeach ($modes as $mode) {\n    try {\n        var_dump(count([], $mode));\n    } catch (\\ValueError $error) {\n        echo $error->getMessage() . \\PHP_EOL;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
