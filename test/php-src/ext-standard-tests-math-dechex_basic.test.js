// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/dechex_basic.phpt
  it("Test dechex() - basic function dechex()", function () {
    expect(parser.parseCode("<?php\n$values = array(10,\n                3950.5,\n                3.9505e3,\n                03,\n                0x5F,\n                \"10\",\n                \"3950.5\",\n                \"3.9505e3\",\n                \"039\",\n                \"0x5F\",\n                true,\n                false,\n                );\nforeach ($values as $value) {\n    try {\n        var_dump(dechex($value));\n    } catch (TypeError $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
