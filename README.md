# day
A website that can tell the day of the week of a given date(year, month, date) . 
<br><br>
You can try using my website <a href="[https://pradyumnarago.github.io/day/]">here</a>
<br>
<br>
Logic Explanation
<br>
<br>
The JavaScript code in day.js contains the logic for analyzing a given date to determine the corresponding day of the week. Here's a detailed explanation of the logic used:
<br>
<br>
User Input Retrieval: The code begins by retrieving user input for the name and date (year, month, and day) from the HTML elements using getElementById() and prompt() functions.
<br><br>
Date Validation: Before proceeding with the analysis, the code performs basic validation to ensure that the entered date is valid. This validation includes checking if the day falls within the valid range for the given month and accounting for leap years.
<br><br>
Day Calculation: The code then calculates the day of the week corresponding to the entered date using a combination of the entered date and basic arithmetic operations.
Leap Year Check: It checks if the entered year is a leap year using the standard leap year calculation logic.
<br><br>
Month Mapping: It maps the entered month to its numerical equivalent to simplify calculations.
<br><br>
Zeller's Congruence: The core of the calculation involves applying Zeller's Congruence algorithm. This algorithm is a mathematical formula to calculate the day of the week for any given date. It involves 
several steps:
<br>
Finding the day of the week for the first day of the month in the year.
<br>
Adjusting for the specific day of the month.
<br>
Considering leap years for February.
<br><br>
Result Display: Once the day of the week is determined, the code displays the result on the webpage along with the entered date.
<br><br>
Thank You Message: Finally, a thank you message is displayed to the user, encouraging them to try again with a different date if desired.

[https://pradyumnarago.github.io/day/]: ttps://pradyumnarago.github.io/day