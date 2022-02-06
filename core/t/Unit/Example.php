<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use KennethTrecy\Index;

class Example extends TestCase {
	public function testName() {
		$expected = 81;

		$product = Index::multiply(9, 9);

		$this->assertEquals($expected, $product);
	}
}
