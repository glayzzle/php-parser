// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug63176.phpt
  it("Bug #63176 (Segmentation fault when instantiate 2 persistent PDO to the same db server)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__. DIRECTORY_SEPARATOR . 'config.inc');\nclass PDO2 extends PDO {\n    protected $transLevel;\n}\nclass PDO3 extends PDO {\n    protected $tomato;\n}\nclass ModelA {\n    public function __construct($h) {\n        var_dump($h);\n        if ($h) {\n            $this->db = new PDO2(PDO_MYSQL_TEST_DSN, PDO_MYSQL_TEST_USER, PDO_MYSQL_TEST_PASS, array(PDO::ATTR_PERSISTENT => true));\n        } else {\n            $this->db = new PDO3(PDO_MYSQL_TEST_DSN, PDO_MYSQL_TEST_USER, PDO_MYSQL_TEST_PASS, array(PDO::ATTR_PERSISTENT => true));\n        }\n        $this->db->query('SELECT 1')->fetchAll();\n    }\n}\n$a = new ModelA(true);\n$b = new ModelA(false);\nvar_dump($a);\nvar_dump($b);\n?>")).toMatchSnapshot();
  });
});
