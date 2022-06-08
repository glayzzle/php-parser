// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/oo_001.phpt
  it("date OO interface", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\nclass _d extends DateTime {\n    function __construct() {\n    }\n}\nclass _t extends DateTimeZone {\n    function __construct() {\n    }\n}\nclass _p extends DatePeriod {\n    function __construct() {\n    }\n}\n$d = new DateTime;\nvar_dump($d->format(\"Y-m-d H:i:s\"));\ntry {\n    $d = new _d;\n    var_dump($d->format(\"Y-m-d H:i:s\"));\n} catch (Error $e) {\n    echo $e->getMessage(),\"\\n\";\n}\ntry {\n    new DateTime(\"1am todax\");\n} catch (Exception $e) {\n    echo $e->getMessage(),\"\\n\";\n}\n$t = new DateTimeZone(\"UTC\");\nvar_dump($t->getName());\ntry {\n    $t = new _t;\n    var_dump($t->getName());\n} catch (Error $e) {\n    echo $e->getMessage(),\"\\n\";\n}\ntry {\n    new DateTimeZone(\"GottaFindThisOne\");\n} catch (Exception $e) {\n    echo $e->getMessage(),\"\\n\";\n}\n$p = new _p;\ntry {\n    var_dump($p->getStartDate());\n} catch (Error $e) {\n    echo $e->getMessage(),\"\\n\";\n}\ntry {\n    var_dump($p->getDateInterval());\n} catch (Error $e) {\n    echo $e->getMessage(),\"\\n\";\n}\necho \"DONE\\n\";\n?>")).toMatchSnapshot();
  });
});
