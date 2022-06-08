// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_seal_basic.phpt
  it("openssl_seal() tests", function () {
    expect(parser.parseCode("<?php\n// simple tests\n$a = 1;\n$b = array(1);\n$c = array(1);\n$d = array(1);\n$method = \"AES-128-ECB\";\nvar_dump(openssl_seal($a, $b, $c, $d, $method));\ntry {\n    var_dump(openssl_seal($a, $a, $a, array(), $method));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n// tests with cert\n$data = \"openssl_open() test\";\n$pub_key = \"file://\" . __DIR__ . \"/public.key\";\n$wrong = \"wrong\";\nvar_dump(openssl_seal($data, $sealed, $ekeys, array($pub_key), $method));           // no output\nvar_dump(openssl_seal($data, $sealed, $ekeys, array($pub_key, $pub_key), $method)); // no output\nvar_dump(openssl_seal($data, $sealed, $ekeys, array($pub_key, $wrong), $method));\ntry {\n    var_dump(openssl_seal($data, $sealed, $ekeys, array(), $method));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(openssl_seal($data, $sealed, $ekeys, array($wrong), $method));\n?>")).toMatchSnapshot();
  });
});
