<?php

namespace Tests\Integration;

use PHPUnit\Framework\TestCase;

class Example extends TestCase {
	public function testName() {
		$expected = 81;

		$product = 9 * 9;

		$this->assertEquals($expected, $product);
	}
}
