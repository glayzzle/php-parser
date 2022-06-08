// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_offset_get_error.phpt
  it("Phar: ignore filenames starting with / on offsetSet", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://'.$fname;\n$iname = '/file.txt';\n$ename = '/error/..';\n$p = new Phar($fname);\n$p[$iname] = \"foobar\\n\";\ntry\n{\n    $p[$ename] = \"foobar\\n\";\n}\ncatch(Exception $e)\n{\n    echo $e->getMessage() . \"\\n\";\n}\ninclude($pname . $iname);\n// extra coverage\ntry {\n$p['.phar/oops'] = 'hi';\n} catch (Exception $e) {\necho $e->getMessage(),\"\\n\";\n}\ntry {\n$a = $p['.phar/stub.php'];\n} catch (Exception $e) {\necho $e->getMessage(),\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
