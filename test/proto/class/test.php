<?php
final class foo {
	public $bar;
	private $foo = 0;
	public function __construct($bar) {
		$this->bar = $bar;
	}
	public function foo() { return ++$this->foo; }
	public static function bar() {
		return new self(123);
	}
}

$foo = new foo('azerty');
echo $foo->foo() . "\n";
echo $foo->bar . "\n";
echo foo::bar()->bar . "\n";