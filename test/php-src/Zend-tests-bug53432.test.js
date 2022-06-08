// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug53432.phpt
  it("Bug #53432: Assignment via string index access on an empty string converts to array", function () {
    expect(parser.parseCode("<?php\n$str = '';\nvar_dump($str[0] = 'a');\nvar_dump($str);\n$str = '';\nvar_dump($str[5] = 'a');\nvar_dump($str);\n$str = '';\nvar_dump($str[-1] = 'a');\nvar_dump($str);\n$str = '';\ntry {\n    var_dump($str['foo'] = 'a');\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump($str);\n$str = '';\ntry {\n    var_dump($str[] = 'a');\n} catch (Error $e) {\n    echo \"Error: {$e->getMessage()}\\n\";\n}\nvar_dump($str);\n$str = '';\ntry {\n    var_dump($str[0] += 1);\n} catch (Error $e) {\n    echo \"Error: {$e->getMessage()}\\n\";\n}\nvar_dump($str);\n$str = '';\ntry {\n    var_dump($str[0][0] = 'a');\n} catch (Error $e) {\n    echo \"Error: {$e->getMessage()}\\n\";\n}\nvar_dump($str);\n?>")).toMatchSnapshot();
  });
});
