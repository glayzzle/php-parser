// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71841.phpt
  it("Bug #71841 (EG(error_zval) is not handled well)", function () {
    expect(parser.parseCode("<?php\n$z = unserialize('O:1:\"A\":0:{}');\ntry {\n    var_dump($z->e.=0);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(++$z->x);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump($z->y++);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$y = array(PHP_INT_MAX => 0);\ntry {\n    var_dump($y[] .= 0);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(++$y[]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump($y[]++);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
