# Kavach-2023
App:

The Suraksha App aims to efficiently monitor the deployed ground personnel using GPS primarily.

The app works by the designated officer reaching the location and checking-in, in the app which shares the Personnel Location, Time of check-in and the live location monitoring info to the backend which the admin can monitor.

The app shows distance the officer is from the posting location, if the officer moves away > 1km (or any assigned radius), an alert is sent to the admin and the admin can act accordingly.

If for some genuine reason the personnel has to go off duty, they can send the alert signals or info signals to the admin who can listen to the problem and act as per it.

The admin can monitor all personnel under their jurisdiction (here the admin can be the SHO of a particular police station or the tech team of the station). He can also assign, change, view all officers presence.

The app sends alert dialogues at random times when an officer is posted, where in the officer is required to scan their face, which ensures the designated officer is operating the device, hence is on duty. Once off duty, the personnel can check-out from the app, whose information too is shared with the admin.

In case the GPS availability is limited or unavailable, the app switches to using NFC (Near Field Communication) to authenticate the personnel's presence using their ID Cards.

The alternative solution to NFC or GPS can be using Bluetooth, wherein the using the Bluetooth the nearby presence of the officer can be authenticated automatically.

The backend is setup using firebase, a platform provided by Google Inc. which provided maximal security of the data and makes the database less prone to being hacked.
![image](https://user-images.githubusercontent.com/87411045/227756087-0f2c82d4-4b7c-4ee7-a1b3-800f5be68d9b.png)
![image](https://user-images.githubusercontent.com/87411045/227756106-eafff795-27b9-430b-8255-d9c024494243.png)

![image](https://user-images.githubusercontent.com/87411045/227756111-d6eca96f-c12a-4843-bd8a-e0e0f62d9c7c.png)

![image](https://user-images.githubusercontent.com/87411045/227756112-deb96ecc-e86e-40b6-8792-04f06f20e74b.png)

![image](https://user-images.githubusercontent.com/87411045/227756124-2cae4ed8-f64f-428f-b9a8-bc9d5e5f8aab.png)

![image](https://user-images.githubusercontent.com/87411045/227756126-0ca06036-ca2c-4aad-8092-81e580732c4d.png)

![image](https://user-images.githubusercontent.com/87411045/227756130-2ebe333d-b185-488a-9494-b135a1fd49ef.png)

