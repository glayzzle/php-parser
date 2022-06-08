// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_001.phpt
  it("Testing nested exceptions", function () {
    expect(parser.parseCode("<?php\ntry {\n    try {\n        try {\n            try {\n                throw new Exception();\n            } catch (Exception $e) {\n                var_dump($e->getMessage());\n                throw $e;\n            }\n        } catch (Exception $e) {\n            var_dump($e->getMessage());\n            throw $e;\n        }\n    } catch (Exception $e) {\n        var_dump($e->getMessage());\n        throw $e;\n    }\n} catch (Exception $e) {\n    var_dump($e->getMessage());\n    throw $e;\n}\n?>")).toMatchSnapshot();
  });
});
