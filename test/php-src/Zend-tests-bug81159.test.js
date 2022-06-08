// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug81159.phpt
  it("Bug #81159: Object to int warning when using an object as a string offset", function () {
    expect(parser.parseCode("<?php\n$s = 'Hello';\n$o = new stdClass();\ntry {\n    $s[$o] = 'A';\n} catch (\\Throwable $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump($s[$o]);\n} catch (\\Throwable $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
