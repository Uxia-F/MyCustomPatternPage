# MyCustomPatternPage
Page to store measures to do custom patterns for cloths, for different people. The patterns for different types of clothes will be modified using the measures taken from people.


On this project I am going to use HTML, CSS and JavaScript on the frotnend for the structure of the page I will be using.
As a "host" I am using GitHub pages.
I need to do a database to store the measures of different people, so at the moment I will store them at Supabase or Firebase (still deciding)
For the pattern logic I am going to use SVG (Scalable Vector Graphics), which I can draw with JS.
.
.
.
.
List of things to do in order:

PHASE 1 (Data & Setup):
  - Initialize Repository. Basic folder structure (index.html, style.css and script.js).
  - Define Data Structure (JSON). How a "Person" looks in code, to help me visualize what I am saving to the database ("Person" object: {"name": "Rose", "measurements": {"height": 170, "waist": 70}}).
  - Choose Database (Supabase).


PHASE 2 (User Interface):
  - Create the "Profile" Form. Build simple HTML to type in a name and the measures.
  - Build the "Person Gallery". Section on the page that fetches the names from th database and lists them to click on them.
  - Dynamic Garment Forms. Build dropdown menu (Dresses, Trousers, etc). When one is selected, use code to "unhide" only the specific measurement inputs needed for that item.


PHASE 3 (Logic & Math):
  - The "ease" Engine. JavaScript specifically for math. Input raw measures ans output "Drafting Measures" (example: waist + 2cm for breathing room)
  - SVG Canvas Setup. SVGs use math to draw lines and curves, scalating patterns to any size without losing quality.
  - Drawing the basic block. Start coding a simple rectangular "Scarf" pattern based on height, and then move on.


  
