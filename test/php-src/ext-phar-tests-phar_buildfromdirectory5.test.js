// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_buildfromdirectory5.phpt
  it("Phar::buildFromDirectory() with matching regex", function () {
    expect(parser.parseCode("<?php\nmkdir(__DIR__.'/testdir5');\nforeach(range(1, 4) as $i) {\n    file_put_contents(__DIR__.\"/testdir5/file$i.txt\", \"some content for file $i\");\n}\ntry {\n    $phar = new Phar(__DIR__ . '/buildfromdirectory5.phar');\n    $a = $phar->buildFromDirectory(__DIR__ . '/testdir5', '/\\.txt/');\n    asort($a);\n    var_dump($a);\n} catch (Exception $e) {\n    var_dump(get_class($e));\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump(file_exists(__DIR__ . '/buildfromdirectory5.phar'));\n?>")).toMatchSnapshot();
  });
});
