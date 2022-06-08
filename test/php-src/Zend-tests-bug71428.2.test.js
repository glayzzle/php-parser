// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71428.2.phpt
  it("bug #71428.2: inheritance of ye olde dynamic interfaces", function () {
    expect(parser.parseCode("<?php\ninterface StatementInterface {\n    public function fetch(int $first = PDO::FETCH_BOTH, int $second = PDO::FETCH_ORI_NEXT, int $third = 0);\n}\nclass Statement extends PDOStatement implements StatementInterface {}\ninterface StatementInterface1 {\n    public function fetch(int $first = PDO::FETCH_ASSOC, int $second = PDO::FETCH_ORI_PRIOR, int $third = 1);\n}\nclass Statement1 extends PDOStatement implements StatementInterface1 {}\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
