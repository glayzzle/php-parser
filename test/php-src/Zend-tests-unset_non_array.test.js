// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/unset_non_array.phpt
  it("Unset on non-array", function () {
    expect(parser.parseCode("<?php\nunset($x[0]);\n$x = null;\nunset($x[0]);\n$x = false;\nunset($x[0]);\n$x = true;\ntry {\n    unset($x[0]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$x = 1;\ntry {\n    unset($x[0]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$x = 3.14;\ntry {\n    unset($x[0]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$x = \"str\";\ntry {\n    unset($x[0]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$x = new stdClass;\ntry {\n    unset($x[0]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n// And now repeat the same with a nested offset.\nunset($x);\nunset($x[0][0]);\n$x = null;\nunset($x[0][0]);\n$x = false;\nunset($x[0][0]);\n$x = true;\ntry {\n    unset($x[0][0]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$x = 1;\ntry {\n    unset($x[0][0]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$x = 3.14;\ntry {\n    unset($x[0][0]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$x = \"str\";\ntry {\n    unset($x[0][0]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$x = new stdClass;\ntry {\n    unset($x[0][0]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
