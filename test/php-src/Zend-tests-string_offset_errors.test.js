// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/string_offset_errors.phpt
  it("Some string offset errors", function () {
    expect(parser.parseCode("<?php\nfunction &test() : string {\n    $str = \"foo\";\n    return $str[0];\n}\ntry {\n    test();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $str = \"foo\";\n    $str[0] =& $str[1];\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
