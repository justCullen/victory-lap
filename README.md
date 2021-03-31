# Victory Lap

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Victory Lap** lets users share the places they'd like to go once they are fully vaccinated and feel safe to travel again._

### Features

- _User Authentication_
- _Create/Edit/Delete a new entry to the destination list_
- _Favorite any destinations_
- _View destination details_
- _Comment on destinations_

### Goals

- _Achieve MVP_
- _Beautiful styling_
- _Animations and screen transitions_

### Challenges

- _I did not have much input on the backend during P3, so backend may be difficult this time._
- _It has been a while since I built anything on the front end, so that might be a challenge too._
- _Styling has not been my strong suit, so I need to block out plenty of time for it._

<br>

## MVP

_The **Victory Lap** MVP allows users to create new destinations that populate a main list on the front page. Users may then edit or delete any of their own entries. Users can favorite and comment on any destination on the list, as well as view details on the destinations._

<br>

### Libraries and Dependencies

|     Library      | Description         |
| :--------------: | :------------------ |
|   React Router   | _Route/Links_ |
|       JWT        | _User Auth_ |
|      bcrypt      | _User Auth_ |
|     pry-rails    | _Ease of Use_ |
|     rack-cors    | _Because I have to_ |

<br>

### Client (Front End)

#### Wireframes

![Desktop Landing](https://i.imgur.com/7rC4Kpj.png)

- Desktop Landing

![Desktop Login](https://i.imgur.com/zyaKWnb.png)

- Desktop Login

![Desktop SignUp](https://i.imgur.com/cpVs0Xw.png)

- Desktop SignUp

![Desktop Destinations](https://i.imgur.com/zh7BSn2.png)

- Desktop Destinations Main List

![Desktop Destination Details](https://i.imgur.com/06TXxW1.png)

- Desktop Destination Details

![Desktop New Destination](https://i.imgur.com/SvLhZO4.png)

- Desktop New Destination

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree](https://i.imgur.com/DDhw1bt.png)

#### Component Architecture
 
``` structure

src
|__ containerss/
      |__ MainContainer.jsx
|__ layouts/
      |__ Layout.jsx
|__ screens/
      |__ CommentBox.jsx
      |__ LandingPage.jsx
      |__ Login.jsx
      |__ Register.jsx
      |__ LocationsList.jsx
      |__ LocationDetails.jsx
      |__ LocationCreate.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ users.js
      |__ locations.js
      |__ comments.js

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested |
| ------------------- | :------: | :------------: | :-----------: |
| Create CRUD Actions |    H     |     8 hrs      |         |
|        Auth         |    H     |     5 hrs      |         |
|   Basic Frontend    |    H     |     8 hrs      |         |
|         CSS         |    H     |     18 hrs     |         |
| TOTAL               |          |     39 hrs     |         |

<br>

### Server (Back End)

#### ERD Model

[ERD](https://i.imgur.com/FwQtB4V.png)
<br>

***

## Post-MVP

- _Realtime updating of the Locations List page, including new entries, sorting, and favorites count._
- _Realtime update of the comments feed._

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
