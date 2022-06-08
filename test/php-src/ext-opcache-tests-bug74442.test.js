// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug74442.phpt
  it("Bug #74442: Opcached version produces a nested array", function () {
    expect(parser.parseCode("<?php\nclass Schema_Base {\n    public function addField($typeclass, array $params = null) {\n        $field = new $typeclass($params);\n        return $field;\n    }\n}\nclass Field_Base {\n    public function __construct(array $params = null) {\n        if (! is_array($params)) {\n            $params = (array) $params;\n        }\n        call_user_func_array(array($this, 'acceptParams'), $params);\n    }\n}\nclass Field_Integer extends Field_Base {\n    protected function acceptParams($bytes = 4) {\n        echo print_r($bytes, true);\n    }\n}\ntry {\n    $schema = new Schema_Base;\n    $schema->addField('Field_Integer');\n} catch (Throwable $ex) {\n    echo \"CAUGHT EXCEPTION\";\n    echo (string)$ex;\n}\n?>")).toMatchSnapshot();
  });
});
