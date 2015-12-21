# Andrew Corliss
###Technical Assesment for Truecaller
### 801 Pennsylvania Street Unit #203
### Denver, Colorado, USA
## 20/09/2015
#### Main Project Files Located in directory => Backbone

- This project uses Backbone, Backbone.LocalStorage, and Marionette for the JavaScript development
- I am comfortable enough with these tools that I understand how they work and use them.
- I did orignially attempt with Angular but have not had as much training on it and opted to put my best foot forward.

- I have structured the code acording to MV* patterns where logic is seperated into Collections, Models, and Views
- The collections handles "talking" with the API's or DB available before sending each record to an individual Model
- The model and collections are then tied to a view that can be updated with the current data.

#### Assumptions
- One assumption made was that paging would be done on the server rather than the client.
- I presume this since it takes more effort for a client browser to page through 60,000 results than a server spreading out the data.  Because of this assumption I limit the amount of data to display on load
- I would have liked to presume that the Server API would also have a PUT, DELETE, and POST methods available to augment the Contact records to include a favourite attribute.
- I would have like to work with this presumption so I could combine the Favourite Model and Contact Models into one for Display.


#### Shortcuts
- Using Backbone.js over Angular due to my increased exposure on Backbone.
- Discussed in interview that I would require 1 to 2 months to give proper leave notice at current employer.
- Note I would use that time to properly develop my Angular skills (and redevelop this applicaiton) before beginning at Truecaller
- I also did not properly add in a way to delete a favourite from the Local Area yet.  Due to my current schedule I was unable to find proper time. (Sorry)