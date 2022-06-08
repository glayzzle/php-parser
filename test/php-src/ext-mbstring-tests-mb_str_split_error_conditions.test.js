// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_str_split_error_conditions.phpt
  it("mb_str_split() error conditions", function () {
    expect(parser.parseCode("<?php\n$string = \"日本\"; /* 2 chars */\n// Invalid split length\ntry {\n    mb_str_split($string, 0);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    mb_str_split($string, -5);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n//Invalid Encoding\ntry {\n    mb_str_split($string, 1, \"BAD_ENCODING\");\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
