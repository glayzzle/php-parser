// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_008.phpt
  it("Phar object: iterating via SplFileObject", function () {
    expect(parser.parseCode("<?php\n$pharconfig = 1;\nrequire_once 'files/phar_oo_test.inc';\n$phar = new Phar($fname);\n$phar->setInfoClass('SplFileObject');\n$f = $phar['a.csv'];\necho \"===1===\\n\";\nforeach($f as $k => $v)\n{\n    echo \"$k=>$v\\n\";\n}\n$f->setFlags(SplFileObject::DROP_NEW_LINE);\necho \"===2===\\n\";\nforeach($f as $k => $v)\n{\n    echo \"$k=>$v\\n\";\n}\nclass MyCSVFile extends SplFileObject\n{\n    function current(): array|false\n    {\n        return parent::fgetcsv(',', '\"');\n    }\n}\n$phar->setInfoClass('MyCSVFile');\n/** @var MyCSVFile $v */\n$v = $phar['a.csv'];\necho \"===3===\\n\";\nwhile(!$v->eof())\n{\n    echo $v->key() . \"=>\" . join('|', $v->fgetcsv()) . \"\\n\";\n}\necho \"===4===\\n\";\n$v->rewind();\nwhile(!$v->eof())\n{\n    $l = $v->fgetcsv();\n    echo $v->key() . \"=>\" . join('|', $l) . \"\\n\";\n}\necho \"===5===\\n\";\nforeach($v as $k => $d)\n{\n    echo \"$k=>\" . join('|', $d) . \"\\n\";\n}\nclass MyCSVFile2 extends SplFileObject\n{\n    function getCurrentLine(): string\n    {\n        echo __METHOD__ . \"\\n\";\n        return implode('|', parent::fgetcsv(',', '\"'));\n    }\n}\n$phar->setInfoClass('MyCSVFile2');\n/** @var MyCSVFile2 $v */\n$v = $phar['a.csv'];\necho \"===6===\\n\";\nforeach($v as $k => $d)\n{\n    echo \"$k=>\" . $d . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
