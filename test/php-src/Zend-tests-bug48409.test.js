// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug48409.phpt
  it("Bug #48409 (crash when exception is thrown while passing function arguments)", function () {
    expect(parser.parseCode("<?php\nclass ABCException extends Exception {}\nclass BBB\n{\n    public function xyz($d, $x)\n    {\n        if ($x == 34) {\n            throw new ABCException;\n        }\n        return array('foo' => 'xyz');\n    }\n}\nclass CCC\n{\n    public function process($p)\n    {\n        return $p;\n    }\n}\nclass AAA\n{\n    public function func()\n    {\n        $b = new BBB;\n        $c = new CCC;\n        $i = 34;\n        $item = array('foo' => 'bar');\n        try {\n            $c->process($b->xyz($item['foo'], $i));\n        }\n        catch(ABCException $e) {\n            $b->xyz($item['foo'], $i);\n        }\n    } // end func();\n}\nclass Runner\n{\n    public function run($x)\n    {\n        try {\n            $x->func();\n        }\n        catch(ABCException $e) {\n            throw new Exception;\n        }\n    }\n}\ntry {\n    $runner = new Runner;\n    $runner->run(new AAA);\n}\ncatch(Exception $e) {\n    die('Exception thrown');\n}\n?>")).toMatchSnapshot();
  });
});
