// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71572.phpt
  it("Bug #71572: String offset assignment from an empty string inserts null byte", function () {
    expect(parser.parseCode("<?php\n$str = \"abc\";\ntry {\n    var_dump($str[0] = \"\");\n} catch (\\Error $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump($str[1] = \"\");\n} catch (\\Error $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump($str[3] = \"\");\n} catch (\\Error $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump($str[10] = \"\");\n} catch (\\Error $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump($str);\n?>")).toMatchSnapshot();
  });
});
