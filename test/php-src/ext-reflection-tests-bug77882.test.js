// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug77882.phpt
  it("Bug #77882: Different behavior: always calls destructor", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __construct() {\n        throw new Exception();\n    }\n    public function __destruct() {\n        echo \"__destruct\\n\";\n    }\n}\ntry {\n    new Test();\n} catch (Exception $e) {\n    echo \"Exception\\n\";\n}\ntry {\n    $ref = new ReflectionClass('Test');\n    $obj = $ref->newInstance();\n} catch (Exception $e) {\n    echo \"Exception\\n\";\n}\ntry {\n    $ref = new ReflectionClass('Test');\n    $obj = $ref->newInstanceArgs([]);\n} catch (Exception $e) {\n    echo \"Exception\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
