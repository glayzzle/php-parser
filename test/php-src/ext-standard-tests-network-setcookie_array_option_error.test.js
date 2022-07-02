// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/setcookie_array_option_error.phpt
  it("setcookie() array variant error tests", function () {
    expect(parser.parseCode("<?php\nob_start();\n// Unrecognized key and no valid keys\ntry {\n    setcookie('name', 'value', ['unknown_key' => 'only']);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n// Numeric key and no valid keys\ntry {\n    setcookie('name2', 'value2', [0 => 'numeric_key']);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n// Unrecognized key\ntry {\n    setcookie('name3', 'value3', ['path' => '/path/', 'foo' => 'bar']);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n// Invalid path key content\ntry {\n    setcookie('name', 'value', ['path' => '/;/']);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n// Invalid domain key content\ntry {\n    setcookie('name', 'value', ['path' => '/path/', 'domain' => 'ba;r']);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n// Arguments after options array (will not be set)\ntry {\n    setcookie('name4', 'value4', [], \"path\", \"domain.tld\", true, true);\n} catch (\\ArgumentCountError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nif (PHP_INT_SIZE == 8) {\n    try {\n        // To go above year 9999: 60 * 60 * 24 * 365 * 9999\n        setcookie('name', 'value', ['expires' => 315328464000]);\n    } catch (\\ValueError $e) {\n        var_dump($e->getMessage() == 'setcookie(): \"expires\" option cannot have a year greater than 9999');\n    }\n} else {\n    var_dump(true);\n}\nvar_dump(headers_list());")).toMatchSnapshot();
  });
});
