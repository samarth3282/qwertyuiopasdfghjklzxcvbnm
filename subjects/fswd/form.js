// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
//game_registration.html


<!DOCTYPE html>
<html>
<head>
    <title>Game Registration</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
</head>
<body>
    <h1>Game Registration Form</h1>
    <div class="form-container">
        <form id="gameRegistrationForm">
            <div class="form-group">
                <label for="game">Enter Game:</label>
                <input type="text" id="game" name="game" placeholder="Enter the game you want to play" required>
            </div>
            
            <div class="form-group">
                <label>Gender:</label>
                <div class="radio-group">
                    <div class="radio-option">
                        <input type="radio" id="male" name="gender" value="Male" required>
                        <label for="male">Male</label>
                    </div>
                    <div class="radio-option">
                        <input type="radio" id="female" name="gender" value="Female">
                        <label for="female">Female</label>
                    </div>
                    <div class="radio-option">
                        <input type="radio" id="other" name="gender" value="Other">
                        <label for="other">Other</label>
                    </div>
                </div>
            </div>
            
            <div class="form-group">
                <label>Age Group:</label>
                <div class="radio-group">
                    <div class="radio-option">
                        <input type="radio" id="under18" name="age" value="Under 18" required>
                        <label for="under18">Under 18</label>
                    </div>
                    <div class="radio-option">
                        <input type="radio" id="18to30" name="age" value="18-30">
                        <label for="18to30">18-30</label>
                    </div>
                    <div class="radio-option">
                        <input type="radio" id="above30" name="age" value="Above 30">
                        <label for="above30">Above 30</label>
                    </div>
                </div>
            </div>
            
            <div class="form-group">
                <label for="city">City:</label>
                <input type="text" id="city" name="city" required>
            </div>
            
            <button type="submit">Register</button>
        </form>
    </div>

    <script>
        document.getElementById('gameRegistrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const game = document.getElementById('game').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const age = document.querySelector('input[name="age"]:checked').value;
            const city = document.getElementById('city').value;
            
            // Create user data object
            const userData = {
                game: game,
                gender: gender,
                age: age,
                city: city
            };
            
            // Store in localStorage
            localStorage.setItem('gameUserData', JSON.stringify(userData));
            
            // Redirect to welcome page
            window.location.href = 'game_welcome.html';
        });
    </script>
</body>
</html>







//game_welcome.html

<!DOCTYPE html>
<html>
<head>
    <title>Welcome to the Game</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
</head>
<body>
    <div id="welcomeContainer" class="welcome-container">
        <h1>Welcome to the Game!</h1>
        <p>We're excited to have you join us. Here are your registration details:</p>
        
        <div class="user-details">
            <div class="detail-item">
                <span class="detail-label">Game Selected:</span> 
                <span id="gameDisplay"></span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Gender:</span> 
                <span id="genderDisplay"></span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Age Group:</span> 
                <span id="ageDisplay"></span>
            </div>
            <div class="detail-item">
                <span class="detail-label">City:</span> 
                <span id="cityDisplay"></span>
            </div>
        </div>
        
        <button class="back-button" onclick="location.href='game_registration.html'">Back to Registration</button>
    </div>

    <script>
        window.onload = function() {
            // Retrieve user data from localStorage
            const userDataString = localStorage.getItem('gameUserData');
            
            if (userDataString) {
                const userData = JSON.parse(userDataString);
                
                
                alert("Registration Successful!\n\nGame: "+userData.game+"\nGender: "+userData.gender+"\nAge Group: "+userData.age\nCity: "+userData.city);
                
                // Display user data on the page
                document.getElementById('gameDisplay').textContent = userData.game;
                document.getElementById('genderDisplay').textContent = userData.gender;
                document.getElementById('ageDisplay').textContent = userData.age;
                document.getElementById('cityDisplay').textContent = userData.city;
                
                // Show the welcome container
                document.getElementById('welcomeContainer').style.display = 'block';
            } else {
                // If no data found, redirect back to registration
                alert('No registration data found. Please register first.');
                window.location.href = 'game_registration.html';
            }
        };
    </script>
</body>
</html>
`;
  res.json({ code: codeString });
});

module.exports = router;
