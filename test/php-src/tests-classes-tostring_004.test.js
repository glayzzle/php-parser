// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/tostring_004.phpt
  it("Object to string conversion: error cases and behaviour variations.", function () {
    expect(parser.parseCode("<?php\nfunction test_error_handler($err_no, $err_msg, $filename, $linenum) {\n        echo \"Error: $err_no - $err_msg\\n\";\n}\nset_error_handler('test_error_handler');\nerror_reporting(8191);\necho \"Object with no __toString():\\n\";\n$obj = new stdClass;\necho \"Try 1:\\n\";\ntry {\n    printf($obj);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nprintf(\"\\n\");\necho \"\\nTry 2:\\n\";\ntry {\n    printf($obj . \"\\n\");\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"\\n\\nObject with bad __toString():\\n\";\nclass badToString {\n    function __toString() {\n        return [];\n    }\n}\n$obj = new badToString;\necho \"Try 1:\\n\";\ntry {\n    printf($obj);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nprintf(\"\\n\");\necho \"\\nTry 2:\\n\";\ntry {\n    printf($obj . \"\\n\");\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
