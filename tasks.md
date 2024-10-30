# Tasks

## Background

- We are going to create a server that manage a pet keeping application, like Tamagochies, similar to Tetova Teve Club, Hosemberkepzo.
- The user can create a new pet.
- The user can get the list of pets.
- The user can get the status of one pet.
- The user the user can feed a given pet.
- The user can make older a pet of one day.

When a day passes, the pet behaves like this:

- If there is food in front of it, it eats it. Hence the food is decreased by one and its weight increased by one.
- If there is no food in front of the pet, its weight is decreased by one if at least it has one weight.
- If the pet's weight goes to zero, unfortunately it is dead.
- When a pet is dead it is not possible to feed them or make it older.

