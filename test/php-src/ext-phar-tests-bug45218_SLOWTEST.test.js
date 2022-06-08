// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug45218_SLOWTEST.phpt
  it("Phar::buildFromIterator() iterator, too many files for open file handles (Bug #45218)", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.txt';\nfile_put_contents($fname2, 'a');\nclass myIterator implements Iterator\n{\n    var $a;\n    var $count = 1;\n    function next(): void {\n        ++$this->count;\n    }\n    function current(): mixed {\n        if (($this->count % 100) === 0) {\n            echo $this->count, \"\\n\";\n        }\n        return $GLOBALS['fname2'];\n    }\n    function key(): mixed {\n        return 'f' . $this->count;\n    }\n    function valid(): bool {\n        return $this->count < 3000;\n    }\n    #[ReturnTypeWillChange]\n    function rewind() {\n        $this->count = 1;\n        return $GLOBALS['fname2'];\n    }\n}\ntry {\n    chdir(__DIR__);\n    $phar = new Phar($fname);\n    $ret = $phar->buildFromIterator(new myIterator);\n    foreach ($ret as $a => $val) {\n        $ret[$a] = str_replace(dirname($fname2) . DIRECTORY_SEPARATOR, '*', $val);\n    }\n    var_dump($ret);\n} catch (Exception $e) {\n    var_dump(get_class($e));\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
