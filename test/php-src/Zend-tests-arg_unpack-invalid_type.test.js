// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arg_unpack/invalid_type.phpt
  it("Only arrays and Traversables can be unpacked", function () {
    expect(parser.parseCode("<?php\nfunction test(...$args) {\n    var_dump($args);\n}\ntry {\n    test(...null);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test(...42);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test(...new stdClass);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test(1, 2, 3, ...\"foo\", ...[4, 5]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test(1, 2, 3, ...new StdClass, ...3.14, ...[4, 5]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
