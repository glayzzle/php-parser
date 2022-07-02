// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug73341.phpt
  it("Bug #73144 (Use-afte-free in ArrayObject Deserialization)", function () {
    expect(parser.parseCode("<?php\ntry {\n$token = 'a:2:{i:0;O:1:\"0\":2:0s:1:\"0\";i:0;s:1:\"0\";a:1:{i:0;C:11:\"ArrayObject\":7:{x:i:0;r}';\n$obj = unserialize($token);\n} catch(Exception $e) {\n    echo $e->getMessage().\"\\n\";\n}\ntry {\n$inner = 'x:i:1;O:8:\"stdClass\":1:{};m:a:0:{}';\n$exploit = 'C:11:\"ArrayObject\":'.strlen($inner).':{'.$inner.'}';\nunserialize($exploit);\n} catch(Exception $e) {\n    echo $e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
