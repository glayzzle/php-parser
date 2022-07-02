// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug75921.phpt
  it("Bug #75921: Inconsistent error when creating stdObject from empty variable", function () {
    expect(parser.parseCode("<?php\ntry {\n    $null->a = 42;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($null);\nunset($null);\ntry {\n    $null->a['hello'] = 42;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($null);\nunset($null);\ntry {\n    $null->a->b = 42;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($null);\nunset($null);\ntry {\n    $null->a['hello']->b = 42;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($null);\nunset($null);\ntry {\n    $null->a->b['hello'] = 42;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($null);\nunset($null);\n?>")).toMatchSnapshot();
  });
});
