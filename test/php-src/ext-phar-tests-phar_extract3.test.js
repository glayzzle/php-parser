// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_extract3.phpt
  it("Phar: Phar::extractTo() - check that phar exists", function () {
    expect(parser.parseCode("<?php\n$fname   = __DIR__ . '/files/bogus.zip';\n$fname2  = __DIR__ . '/files/notbogus.zip';\n$extract = __DIR__ . '/test-extract3';\n$phar = new PharData($fname);\ntry {\n    $phar->extractTo($extract);\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$phar = new PharData($fname2);\nforeach ($phar as $filename) {\n    echo \"$filename\\n\";\n}\ntry {\n    $phar->extractTo($extract);\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
