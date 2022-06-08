// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug52041.phpt
  it("Bug #52041 (Memory leak when writing on uninitialized variable returned from function)", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    return $x;\n}\ntry {\n    foo()->a = 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    foo()->a->b = 2;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    foo()->a++;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    foo()->a->b++;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    foo()->a += 2;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    foo()->a->b += 2;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nfoo()[0] = 1;\nfoo()[0][0] = 2;\nfoo()[0]++;\nfoo()[0][0]++;\nfoo()[0] += 2;\nfoo()[0][0] += 2;\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
