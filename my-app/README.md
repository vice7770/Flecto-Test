# React + TypeScript + Vite

Some Explanation for this project:

Thinking of developing a table with planets with information. All planets will be fetch and it will have virtualization on clientside. Clicking on the card will open the planets details.

This project will be done with nextjs and here some libraries to note:
- CSS styling will be with tailwind
- Components will be shadcn
- State managment will be React-Query, load/error animations for the elements.
- Tanstack table for the table, with virtualization

MileStones:

X Get the data to fetch and necessary api calls with types.(All planets and details)
X Routing, as well as Details page UI.
X UI for Main Page, this includes table
X Working Query states for both Home and Details, with its individual requests and queryKeys.
X Search

Optional if i have time:

Images for the planets types.
Mobile support.

Tecnical notes:

The table and search will be client side components, pagination will use react query to manage and cache the data.
Details will be pure server component.
Search and table will share searchParams
Loading State of the Planets hook will be exposed via zustand, and will be used in search component.
Promise all is used to get all movies and all residents, in the details screen(serverside).