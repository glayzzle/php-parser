// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug68992.phpt
  it("Bug #68992 (json_encode stacks exceptions thrown by JsonSerializable classes)", function () {
    expect(parser.parseCode("<?php\nclass MyClass implements JsonSerializable {\n    public function jsonSerialize(): mixed {\n        throw new Exception('Not implemented!');\n    }\n}\n$classes = [];\nfor($i = 0; $i < 5; $i++) {\n    $classes[] = new MyClass();\n}\ntry {\n    json_encode($classes);\n} catch(Exception $e) {\n    do {\n        printf(\"%s (%d) [%s]\\n\", $e->getMessage(), $e->getCode(), get_class($e));\n    } while ($e = $e->getPrevious());\n}\n?>")).toMatchSnapshot();
  });
});
