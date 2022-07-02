// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug31177.phpt
  it("Bug #31177 (Memory leak)", function () {
    expect(parser.parseCode("<?php\nclass DbGow {\n    public function query() {\n        throw new Exception;\n    }\n    public function select() {\n        return new DbGowRecordSet($this->query());\n    }\n    public function select2() {\n        new DbGowRecordSet($this->query());\n    }\n}\nclass DbGowRecordSet {\n    public function __construct($resource) {\n    }\n}\n$db = new DbGow;\ntry {\n    $rs = $db->select();\n} catch(Exception $e) {\n    echo \"ok\\n\";\n}\ntry {\n    $db->select2();\n} catch(Exception $e) {\n    echo \"ok\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
