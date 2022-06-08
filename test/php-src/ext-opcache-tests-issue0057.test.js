// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/issue0057.phpt
  it("ISSUE #57 (segfaults in drupal7)", function () {
    expect(parser.parseCode("<?php\nclass ZException extends Exception {\n}\nfunction dummy($query) {\n    try {\n        switch ($query) {\n            case 1;\n            break;\n            case 2;\n            break;\n        default:\n            throw new Exception('exception');\n        }\n    } catch (ZException $e) {\n        return NULL;\n    }\n}\ntry {\n    dummy(0);\n} catch (Exception $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
