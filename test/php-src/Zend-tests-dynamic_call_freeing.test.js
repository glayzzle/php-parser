// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dynamic_call_freeing.phpt
  it("Freeing of function \"name\" when dynamic call fails", function () {
    expect(parser.parseCode("<?php\ntry {\n    $bar = \"bar\";\n    (\"foo\" . $bar)();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $bar = [\"bar\"];\n    ([\"foo\"] + $bar)();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    (new stdClass)();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
