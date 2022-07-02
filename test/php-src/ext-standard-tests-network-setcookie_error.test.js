// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/setcookie_error.phpt
  it("setcookie() error tests", function () {
    expect(parser.parseCode("<?php\nob_start();\ntry {\n    setcookie('');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    setcookie('invalid=');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    setcookie('name', 'invalid;');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    setcookie('name', 'value', 100, 'invalid;');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    setcookie('name', 'value', 100, 'path', 'invalid;');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nif (PHP_INT_SIZE == 8) {\n    try {\n        // To go above year 9999: 60 * 60 * 24 * 365 * 9999\n        setcookie('name', 'value', 315328464000);\n    } catch (\\ValueError $e) {\n        var_dump($e->getMessage() == 'setcookie(): \"expires\" option cannot have a year greater than 9999');\n    }\n} else {\n    var_dump(true);\n}\nvar_dump(headers_list());\n?>")).toMatchSnapshot();
  });
});
