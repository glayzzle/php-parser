// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_buildfromdirectory4.phpt
  it("Phar::buildFromDirectory(), directory exists", function () {
    expect(parser.parseCode("<?php\nmkdir(__DIR__.'/testdir4');\nforeach(range(1, 4) as $i) {\n    file_put_contents(__DIR__.\"/testdir4/file$i.txt\", \"some content for file $i\");\n}\ntry {\n    $phar = new Phar(__DIR__ . '/buildfromdirectory4.phar');\n    $a = $phar->buildFromDirectory(__DIR__ . '/testdir4');\n    asort($a);\n    var_dump($a);\n} catch (Exception $e) {\n    var_dump(get_class($e));\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump(file_exists(__DIR__ . '/buildfromdirectory4.phar'));\n?>")).toMatchSnapshot();
  });
});
