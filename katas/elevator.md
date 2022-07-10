# Empire State Building elevator

Source: [shpp.gitbook.io](https://shpp.gitbook.io/zero/tutorials/if-else/empire-state-building-lift)

The Empire State Building in New York has 102 floors.  
Floors from 24 to 39 inclusive are secret.  
That is, you can only get there using a password.  

Write a function that behaves as follows:

1) It takes a target floor number.
2) It takes optionally a password.
3) If the target floor number is less than 1 or more than 102, it returns "wrong floor".
4) If the target floor is NOT secret, "ok" is returned.
5) If the target floor is locked, a password is required.
6) If the password is required and it is 1337, "ok" is returned.
7) Otherwise, "invalid password" returned.