I want to build a web app game prototype in single html+css+js fullscreen canvas file. Using data-driven approach, classes, GameEngine for game loop if needed, for easy migration to reactjs+pixijs stack.



Main concept is dynasty family tree visualisation with top-down direction. 

Marriage layout should be next to each other regardless of generation with provided.

In the attached file I provide examples how should tree connectors be displayed: one main arrow from marriage which spreads to all children.

Let's add minimal functionality for the first iteration:

1. starting with only one dynasty member

2. clicking on person should display some element (modal or aside panel) with the person  information  and some button actions:

   1. arrange marriage - randomly create a person

3. time progress, with possibility to pause or speed up, 1 day or 1 year per second



Minimalistic game UI. with white-black colours, light colours palette with bright accent colours palette for main element and events.



this starting implementation will be base for next game mechanics: many dynasties, alliances, genes, cadet branches, dynasty merge etc.



clarify all needed information before generate the code.