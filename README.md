# Floating-Point Precision Issues in JavaScript Subtraction

This repository demonstrates a common issue in JavaScript related to floating-point number precision.  When performing subtraction (or other arithmetic operations) on floating-point numbers, slight inaccuracies can arise due to how these numbers are represented in binary format.

## The Problem

The `bug.js` file shows a simple subtraction function. While it works correctly for integers, it might yield unexpected results with floating-point numbers in certain scenarios.  The imprecision might seem insignificant in isolated cases but can compound in more complex applications.

## The Solution

The `bugSolution.js` file doesn't offer a complete fix, as the fundamental limitation lies within how floating-point numbers are stored.  However, it provides strategies to mitigate the problem, including using libraries that offer increased precision or employing rounding techniques to manage expected precision losses.