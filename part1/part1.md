1. The function prints out i, which at this point is the number of prices we saw.
   i lives beyond its original scope because it was declared with var

2. The function prints out the discounted price of the final price in the list
   discountedPrice also lives outside of its original scope

3. The function prints out the discounted price of the final price again

4. It returns [ 50, 100, 150 ]. These are the discounted versions of the
   prices that we passed to the function. They get pushed into the list
   during the for loop as they are calculated.

5. Node throws us a reference error because i is no longer defined

6. Another reference error for discountedPrice

7. finalPrice still prints but its only the discounted version of the last price

8. Assuming no errors it returns [ 50, 100, 150 ] still. The calculated
   prices are pushed there in the for loop.

9. We once again get a reference error for i since it is out of scope.

10. A reference error for discountedPrice.

11. It prints the discounted version of the last price seen.

12. Assuming no errors it returns [ 50, 100, 150 ] again. 

13.A student.name
13.B student["Grad Year"]
13.C student.greeting()
13.D student["Favorite Teacher"].name
13.E student.courseLoad[0]

14.A '32'	  - it converts second value to string and concatenates them
14.B 1	       	  - it converts them both to numbers and subtracts
14.C 3 	       	  - null becomes - and it adds like normal
14.D '3null'   	  - null is converted to a string and concatenated with '3'
14.E 4	       	  - true is converted to 1 and added to 3
14.F 0	       	  - false and null both convert to 0 and are added
14.G '3undefined' - undefined is converted to a string and they are concatenated
14.H NaN	  - since undefined is not a valid num the conversion makes the whole thing NaN

15.A true  - '2' becomes a number and is greater than 1
15.B false - 2 > 1 in unicode/ascii so it compares the first character of each string and finds '2' to be greater
15.C true  - '2' becomes and number and is equal with 2
15.D false - 2 and '2' are different types so === immediately returns false
15.E false - true becomes 1 and is not equal to 2
15.F true  - Boolean(2) becomes true so the === compares and returns true

16. === checks equality without any implicit conversions and == checks with conversions

17. As we saw before 2 is not equal to true so that block is skipped. Variables that
    are not "empty" become true so the else if statement is true and the
    associated line is printed.

18. part1-question18.js

19. The modifyArray function calls the callback function doSomething and passes it
    its own callback function, function(x). So doSomething adds 2 to num and passes
    it to function(x) which doubles it and stores it in the newArr.
    The returned value is [ 6, 8, 10 ].

20. part1-question20.js

21. 1
    4
    3
    2