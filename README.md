# Screenshots
![Screenshot (521)](https://user-images.githubusercontent.com/43553695/169533315-2cbb1cd4-8a7a-40ad-88de-2c9fd3bda97a.png)
![Screenshot (523)](https://user-images.githubusercontent.com/43553695/169533324-c82d61cf-5faf-45d5-9343-22b7a89130f3.png)
![Screenshot (524)](https://user-images.githubusercontent.com/43553695/169533327-936b1274-3103-43f6-bb75-77f5d96d5465.png)

# It is a full stack Invoice Management Application using 
Java, JDBC, HTML, CSS, JSP/Servlets and JavaScript.

It is a Receivables Dashboard used to,\
● Visualize Data in the form of a table.\
● Perform Searching operations on the invoices.\
● Modify data in the editable fields of the grid.

Softwares Stacks used For Development:
a. Front-end Development:\
  i. VS-CODE
b. Back-end Development:\
  i. Eclipse
  ii. Apache Tomcat 8.5
  iii. MySQL Server
  iv. SQLYog Community Edition
  
Technology Stacks Being Used:\
a. Front-end Development: HTML, CSS and JavaScript\
b. Back-end Development: Java\
c. Database: MYSQL\
d. Design Architecture : Adobe XD (*Provided readily)\

UNDERSTANDING THE REQUIREMENT:\
a. Understanding the layout design:

The Whole layout of the UI has been divided into Header, Grid Panel, and Modal
Sections which are described on the next points. Have a look and feel about the
UI and keep a structure of how to approach to build the UI in a structured fashion.

b. Understanding the Header Section:

1. Customer Logo: This is the logo of the customer for which we will be
building the invoices screen. This logo has already been provided in the
assets folder already.
2. Customer Name : This is the Name of the customer for which we will
be building the invoices screen.
3. Highradius Logo : The Highradius copyright logo should be at the
center of the header. You can download the logo from the experience
design (XD) prototype, place it in your assets folder and then use it.

c. Understanding the Grid Panel Section:\

1. Grid Header: This is the header of the grid and its name should be given as
Invoice List as mentioned in the PRS document.
2. Grid Table Area : This is the main operational part of the grid panel section.
Creating the exact background effect can be difficult. We recommend using a
div tag along with styling for this purpose.

● Grid Panel Section Header Menu: The header menu of the grid will have an
Add Button, an Edit Button, a Delete Button and a Search Bar ( Optional )\
● Invoices Table : This is the table with customer invoice data as rows and the
following columns:\
1. Checkbox
2. Customer Name
3. Customer Number (Customer #)
4. Invoice Number (Invoice #)
5. Invoice Amount
6. Due Date
7. Predicted Payment Date
8. Predicted Aging Bucket
9. Notes
* We recommend using Table for creating this part. Table should be scrollable
and you should paginate the table in order to show the datas. Each row has a
checkbox component, please check the checkbox component from the
recommended list and remember to use checked and unchecked
components for the same from the assets where:\
A. Checked Component : svg from assets of XD or Icons\
B. Unchecked Component : svg from assets of XD or Icons\

d. Understanding the Modal View:\

i. There are 3 different modal views in our application. Those are:\
● Add Modal\
● Edit Modal\
● Delete Modal\
ii. These views can be created using Dialog .
iii. Add Modal :

● Modal Header: This contains the title of the modal and a clickable close icon.
The title of the modal should be Add Invoice. In order to create the close icon
we recommend you directly download the svg from the experience design
(xd) prototype.\
● Modal Body : This contains the form with required fields in order to add data.\

i. Each input has a proper label.
ii. Each label should append a red asterisk for invalid input.
iii. For creating the input fields we recommend using, Input
type="text".
iv. Due date takes a date picker. Explore Input type="date".

● Modal Footer : This contains the saving options for the added record. The
modal has 3 buttons namely: Cancel , Clear, & Add. Use the same Button for
creating these buttons.\
iv. Edit Modal :

● Modal Header: This contains the title of the modal and a
clickable close icon. The title of the modal should be Edit Invoice.
In order to create the close icon we recommend you directly
download the svg from the XD prototype or Icons.\
● Modal Body : This contains the form with required fields in order
to edit data.\
i. Each input has a proper label.
ii. For creating the input fields we recommend using,
Input Type="text"

● Modal Footer : This contains the saving options for the edited
record. The modal has 3 buttons namely: Cancel , Reset, & Save.
Use the same Button for creating these buttons.\

v. Delete Modal:

● Modal Header: This contains the title of the modal and a clickable close
icon. The title of the modal should be Delete record(s)? . In order to
create the close icon we recommend you can directly download the svg
from the experience design (xd) prototype or Icons.\
● Modal Body : This contains the delete warning text with “permanently
delete” highlighted in red.\
● Modal Footer : This contains the saving options for the to be deleted
document. The modal has 2 buttons namely: Cancel & Delete. Use the
same Button for creating these buttons.\

3. Exploring the Error Handling Scenarios:
● Handling errors and edge cases are the most important key factors of a good
application.\
● Users don’t like to see broken UI for development errors.\
● For these reasons we handle the error and edge cases with retry messages,
snackbars or error messages while the UI works as is.\
● Example:\
○ Snackbars:\

■ Snackbars help users in notifying users with the status of their
actions.\
■ Whether it is an error case, success case or any warning
message, snackbars are widely used these days. To implement
this feature we recommend using Snackbar\

○ Valid Error Messages :

■ Whether there is an API failure, or data unavailability, we always notify
the users using a proper error message.\
( You can create these messages in any way you want)
