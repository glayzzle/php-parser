// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_put_contents.phpt
  it("file_put_contents() and invalid parameters", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    function __toString() {\n        return __METHOD__;\n    }\n}\n$file = __DIR__.\"/file_put_contents.txt\";\n$context = stream_context_create();\ntry {\n    var_dump(file_put_contents($file, $context));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(file_put_contents($file, new stdClass));\nvar_dump(file_put_contents($file, new foo));\n$fp = fopen($file, \"r\");\ntry {\n    var_dump(file_put_contents($file, \"string\", 0, $fp));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n@unlink($file);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
