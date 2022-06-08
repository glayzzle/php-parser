// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bug80802.phpt
  it("Bug #80802: zend_jit_fetch_indirect_var assert failure with tracing JIT", function () {
    expect(parser.parseCode("<?php\nabstract class AsyncTask{\n        private static $threadLocalStorage = null;\n        protected function storeLocal(string $key, $complexData) : void{\n                if(self::$threadLocalStorage === null){\n                        self::$threadLocalStorage = new \\ArrayObject();\n                }\n                self::$threadLocalStorage[spl_object_id($this)][$key] = $complexData;\n        }\n        final public function __destruct(){\n                $this->reallyDestruct();\n                if(self::$threadLocalStorage !== null and isset(self::$threadLocalStorage[$h = spl_object_id($this)])){\n                        unset(self::$threadLocalStorage[$h]);\n                        if(self::$threadLocalStorage->count() === 0){\n                                self::$threadLocalStorage = null;\n                        }\n                }\n        }\n        protected function reallyDestruct() : void{\n        }\n}\nclass Task extends AsyncTask{\n        public function __construct(){\n                $this->storeLocal(\"thing1\", new stdClass);\n        }\n}\nfor($i = 0; $i < 10000; ++$i){\n        new Task;\n}\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
