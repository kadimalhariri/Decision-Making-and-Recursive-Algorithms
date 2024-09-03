function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

// Example usage:
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2023)); // false

console.log("#########################################");

function clothingAdvice(temperature, isRaining) {
    if (temperature < 0) {
        return "Wear a heavy winter coat.";
    } else if (temperature >= 0 && temperature < 10) {
        return isRaining ? "Wear a warm coat and carry an umbrella." : "Wear a warm coat.";
    } else if (temperature >= 10 && temperature < 20) {
        return isRaining ? "Wear a light jacket and carry an umbrella." : "Wear a light jacket.";
    } else {
        return isRaining ? "Wear a t-shirt and carry an umbrella." : "Wear a t-shirt.";
    }
}

// Example usage:
console.log(clothingAdvice(15, true));  // Wear a light jacket and carry an umbrella.
console.log(clothingAdvice(25, false)); // Wear a t-shirt.

console.log("#########################################");

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55

console.log("#########################################");

function isPalindrome(str) {
    // Helper function to clean the string
    function cleanString(s) {
        return s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    }

    // Recursive function to check palindrome
    function checkPalindrome(s, left, right) {
        if (left >= right) {
            return true;
        }
        if (s[left] !== s[right]) {
            return false;
        }
        return checkPalindrome(s, left + 1, right - 1);
    }

    const cleanedStr = cleanString(str);
    return checkPalindrome(cleanedStr, 0, cleanedStr.length - 1);
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello, World!")); // false




