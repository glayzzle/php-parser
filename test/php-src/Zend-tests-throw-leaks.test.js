// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/throw/leaks.phpt
  it("throw expression should not leak temporaries", function () {
    expect(parser.parseCode("<?php\ntry {\n    new stdClass(throw new Exception);\n} catch (Exception $e) {\n    echo \"Caught\\n\";\n}\ntry {\n    $a = [];\n    ($a + [1]) + throw new Exception;\n} catch (Exception $e) {\n    echo \"Caught\\n\";\n}\ntry {\n    @throw new Exception;\n} catch (Exception $e) {\n    echo \"Caught\\n\";\n}\nvar_dump(error_reporting());\n// Exit also unwinds and thus has the same basic problem.\nnew stdClass(exit);\n?>")).toMatchSnapshot();
  });
});
