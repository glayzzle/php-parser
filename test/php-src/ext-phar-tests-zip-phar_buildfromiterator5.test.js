// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/phar_buildfromiterator5.phpt
  it("Phar::buildFromIterator() iterator, iterator returns non-string zip-based", function () {
    expect(parser.parseCode("<?php\nclass myIterator implements Iterator\n{\n    var $a;\n    function __construct(array $a)\n    {\n        $this->a = $a;\n    }\n    function next(): void {\n        echo \"next\\n\";\n        next($this->a);\n    }\n    function current(): mixed {\n        echo \"current\\n\";\n        return current($this->a);\n    }\n    function key(): mixed {\n        echo \"key\\n\";\n        return key($this->a);\n    }\n    function valid(): bool {\n        echo \"valid\\n\";\n        return is_object(current($this->a));\n    }\n    function rewind(): void {\n        echo \"rewind\\n\";\n        reset($this->a);\n    }\n}\ntry {\n    chdir(__DIR__);\n    $phar = new Phar(__DIR__ . '/buildfromiterator.phar.zip');\n    var_dump($phar->buildFromIterator(new myIterator(array('a' => new stdClass))));\n} catch (Exception $e) {\n    var_dump(get_class($e));\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
