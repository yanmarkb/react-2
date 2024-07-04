function unroll(square) {
	const result = [];
	if (square.length === 0) return result;

	let top = 0;
	let bottom = square.length - 1;
	let left = 0;
	let right = square[0].length - 1;

	while (top <= bottom && left <= right) {
		// Traverse from left to right along the top boundary
		for (let i = left; i <= right; i++) {
			result.push(square[top][i]);
		}
		top++; // Move the top boundary down

		// Traverse from top to bottom along the right boundary
		for (let i = top; i <= bottom; i++) {
			result.push(square[i][right]);
		}
		right--; // Move the right boundary left

		// Traverse from right to left along the bottom boundary, if the bottom boundary hasn't overlapped with the top boundary
		if (top <= bottom) {
			for (let i = right; i >= left; i--) {
				result.push(square[bottom][i]);
			}
			bottom--; // Move the bottom boundary up
		}

		// Traverse from bottom to top along the left boundary, if the left boundary hasn't overlapped with the right boundary
		if (left <= right) {
			for (let i = bottom; i >= top; i--) {
				result.push(square[i][left]);
			}
			left++; // Move the left boundary right
		}
	}

	return result;
}

module.exports = unroll;
