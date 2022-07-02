// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closures/bug80929.phpt
  it("Bug #80929: Method name corruption related to zend_closure_call_magic", function () {
    expect(parser.parseCode("<?php\nclass DefaultListener\n{\n    public function handleDefaultEvent($event) { }\n}\nclass SubscriberProxy\n{\n    private array $subscribedEvents;\n    private object $subscriber;\n    private Closure $listener;\n    public function __construct(array $subscribedEvents, object $subscriber)\n    {\n        $this->subscribedEvents = $subscribedEvents;\n        $this->subscriber = $subscriber;\n        foreach ($this->subscribedEvents as $eventName => $params) {\n            $this->listener = Closure::fromCallable([$this, $params]);\n        }\n    }\n    public function __call(string $name, array $arguments)\n    {\n        return $this->subscriber->$name(...$arguments);\n    }\n    public function dispatch($event, string $eventName)\n    {\n        ($this->listener)($event, $eventName, null);\n    }\n}\n$proxy = new SubscriberProxy(\n    ['defaultEvent' => 'handleDefaultEvent'],\n    new DefaultListener()\n);\nfor ($i = 0; $i < 10; $i++) {\n    echo $i . PHP_EOL;\n    $proxy->dispatch(null, 'defaultEvent');\n}\n?>")).toMatchSnapshot();
  });
});
