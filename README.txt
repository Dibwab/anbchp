Digital Pledge Wall - Demo
--------------------------------

This is a working prototype of the Digital Pledge Wall project.

Files included:
- index.html  : Citizen pledge form (for mobile via QR code)
- display.html: LED wall / screen showing live pledges
- firebase.js : Your Firebase config
- README.txt  : Setup guide

How to use:
1. Host all files in Firebase Hosting or any static web host.
2. Make sure your Firebase Realtime Database is enabled.
3. Open `display.html` on your LED or large screen.
4. Generate a QR code linking to your hosted `index.html`.
5. Citizens scan, sign, and submit pledges — they appear instantly!

Database path: /pledges
