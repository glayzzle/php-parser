// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug30162.phpt
  it("Bug #30162 (Catching exception in constructor couses lose of $this)", function () {
    expect(parser.parseCode("<?php\nclass FIIFO {\n    public function __construct() {\n        $this->x = \"x\";\n        throw new Exception;\n    }\n}\nclass hariCow extends FIIFO {\n    public function __construct() {\n        try {\n            parent::__construct();\n        } catch(Exception $e) {\n        }\n        $this->y = \"y\";\n        try {\n            $this->z = new FIIFO;\n        } catch(Exception $e) {\n        }\n    }\n    public function __toString() {\n        return \"Rusticus in asino sedet.\";\n    }\n}\ntry {\n    $db = new FIIFO();\n} catch(Exception $e) {\n}\nvar_dump($db);\n$db = new hariCow;\nvar_dump($db);\n?>")).toMatchSnapshot();
  });
});
