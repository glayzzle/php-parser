// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/unknown_named_param.phpt
  it("Unknown named parameter", function () {
    expect(parser.parseCode("<?php\nfunction test($a) {\n}\nfunction test2(...$a) {\n}\ntry {\n    test(b: 42);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test(b: new stdClass);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test(b: 2, a: 1);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test(...new ArrayIterator(['unknown' => 42]));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test2(a: 42);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
