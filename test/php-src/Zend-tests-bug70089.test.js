// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70089.phpt
  it("Bug #70089 (segfault in PHP 7 at ZEND_FETCH_DIM_W_SPEC_VAR_CONST_HANDLER ())", function () {
    expect(parser.parseCode("<?php\nfunction dummy($a) {\n}\ntry {\n    chr(0)[0][] = 1;\n} catch (Error $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    unset(chr(0)[0][0]);\n} catch (Error $e) {\n    var_dump($e->getMessage());\n}\neval(\"function runtimetest(&\\$a) {} \");\ntry {\n    runtimetest(chr(0)[0]);\n} catch (Error $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    ++chr(0)[0];\n} catch (Error $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
