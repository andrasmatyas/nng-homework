This project has 4 different services, the user can select a service from the dropdown menu labeled Select an API.
The 4 services are:
-User: 
  Retrives user data by introducing the user ID and clicking on the Run button.
-Image: 
  Retrives an image url by entering the image name and clicking on the Run button.
-n-th Fibonacci number: 
  Returns the coresponding number in the Fibonacci sequence by entering a number and clicking on the Run button.
-Muliplying two matrices: 
  Returns the resulting matrix of the multiplication of the two matrices introduced by the user. 
  Enter the values for the two matrix fields: First Matrix and Second Matrix. 
  Click on the Run button.
  Warning: 
    Both matrices have to be 2D arrays, each row must have the same (column) length.
    The number of columns in the First Matrix must be equal to the number of rows in the Second Matrix, otherwise the two matrices cannot be multiplied.
There are two additional buttons that can alter the appearance of the user interface:
-Toggle Theme:
  Toggles the color theme of the page between Dark and Light mode.
-Toggle Align:
  Toggles the position of all three control buttons (Toggle Theme, Toggle Align and Run) between left aligned and right aligned.
After clicking on the Run button a loading spinner appears while the data is being retrived.
Uppon data retrival the response JSON can be seen in the <pre> tag under the Run button.
If an error has occured during the data retrival or if incorrect data has been introduced in the input field and error message will be shown.
