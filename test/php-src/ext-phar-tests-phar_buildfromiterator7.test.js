// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_buildfromiterator7.phpt
  it("Phar::buildFromIterator() iterator, file can't be opened", function () {
    expect(parser.parseCode("<?php\nclass myIterator implements Iterator\n{\n    var $a;\n    function __construct(array $a)\n    {\n        $this->a = $a;\n    }\n    function next(): void {\n        echo \"next\\n\";\n        next($this->a);\n    }\n    function current(): mixed {\n        echo \"current\\n\";\n        return current($this->a);\n    }\n    function key(): mixed {\n        echo \"key\\n\";\n        return key($this->a);\n    }\n    function valid(): bool {\n        echo \"valid\\n\";\n        return current($this->a);\n    }\n    function rewind(): void {\n        echo \"rewind\\n\";\n        reset($this->a);\n    }\n}\ntry {\n    chdir(__DIR__);\n    $phar = new Phar(__DIR__ . '/buildfromiterator7.phar');\n    var_dump($phar->buildFromIterator(new myIterator(array('a' => basename(__FILE__, 'php') . '/oopsie/there.phpt'))));\n} catch (Exception $e) {\n    var_dump(get_class($e));\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
