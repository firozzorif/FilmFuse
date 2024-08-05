<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Login or Signup</title>
	<link rel="stylesheet" href="login.css">
</head>

<body>
	<div id="container" class="container">
		<!-- FORM SECTION -->
		<div class="row">
			<!-- SIGN UP -->
			<div class="col align-items-center flex-col sign-up">
				<div class="form-wrapper align-items-center">
					<form class="form sign-up" action="signup.php" method="post">
						<div class="input-group">
							<i class='bx bxs-user'></i>
							<input type="text" id="username" name="username" placeholder="Username" required>
						</div>
						<div class="input-group">
							<i class='bx bx-mail-send'></i>
							<input type="email" id="email" name="email" placeholder="Email" required>
						</div>
						<div class="input-group">
							<i class='bx bxs-lock-alt'></i>
							<input type="password" id="password" name="password" placeholder="Password" required>
						</div>
						<div class="input-group">
							<i class='bx bxs-lock-alt'></i>
							<input type="password" id="confirmPassword" name="confirmPassword"
								placeholder="Confirm password" required>
						</div>
						<button type="submit" name="signupbtn">
							Sign up
						</button>
						<p>
							<span>
								Already have an account?
							</span>
							<b onclick="toggle()" class="pointer">
								Login in here
							</b>
						</p>
					</form>

				</div>
			</div>

			<!-- END SIGN UP -->
			<!-- SIGN IN -->
			<div class="col align-items-center flex-col sign-in">
				<div class="form-wrapper align-items-center">
					<form class="form sign-in" action="login.php" method="post">
						<div class="input-group">
							<i class='bx bxs-user'></i>
							<input type="text" id="username" name="username" placeholder="Username" required>
						</div>
						<div class="input-group">
							<i class='bx bxs-lock-alt'></i>
							<input type="password" id="password" name="password" placeholder="Password" required>
						</div>
						<button type="submit" name="loginbtn">
							Log in
						</button>
						<p>
							<b>
								Forgot password?
							</b>
						</p>
						<p>
							<span>
								Don't have an account?
							</span>
							<b onclick="toggle()" class="pointer">
								Sign up here
							</b>
						</p>
					</form>
				</div>
			</div>
			<!-- END SIGN IN -->
		</div>
		<!-- END FORM SECTION -->
		<!-- CONTENT SECTION -->
		<div class="row content-row">
			<!-- SIGN IN CONTENT -->
			<div class="col align-items-center flex-col">
				<div class="text sign-in">
					<h2>
						Welcome
					</h2>
				</div>
				<div class="img sign-in">

				</div>
			</div>
			<!-- END SIGN IN CONTENT -->
			<!-- SIGN UP CONTENT -->
			<div class="col align-items-center flex-col">
				<div class="img sign-up">

				</div>
				<div class="text sign-up">
					<h2>
						Join with us
					</h2>

				</div>
			</div>
			<!-- END SIGN UP CONTENT -->
		</div>
		<!-- END CONTENT SECTION -->
	</div>

	<div id="message" style="display: none;">
		Registered!
	</div>

	<script src="login.js"></script>

	<script>
		function toggle() {
			const signUpForm = document.querySelector('.sign-up');
			const signInForm = document.querySelector('.sign-in');

			signUpForm.classList.toggle('active');
			signInForm.classList.toggle('active');
		}
	</script>
</body>

</html>

<?php
$conn = mysqli_connect("localhost", "root", "", "website login"); // Adjust database credentials as needed

// Sign Up Logic
if (isset($_POST['signupbtn'])) {
	$username = $_POST['username'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$confirmPassword = $_POST['confirmPassword'];

	// Check if passwords match
	if ($password !== $confirmPassword) {
		echo "<script>
                alert('Passwords do not match');
                window.location.href = 'login.php';
            </script>";
		exit();
	}

	// Check if username already exists
	$checkUserQuery = "SELECT * FROM logindetails WHERE username='$username'";
	$checkUserResult = mysqli_query($conn, $checkUserQuery);
	if (mysqli_num_rows($checkUserResult) > 0) {
		echo "<script>
                alert('Username already exists');
                window.location.href = 'login.php';
            </script>";
		exit();
	}

	// Insert new user into database
	$hashedPassword = password_hash($password, PASSWORD_DEFAULT); // Hash the password
	$insertQuery = "INSERT INTO logindetails (username, email, password) VALUES ('$username', '$email', '$hashedPassword')";
	if (mysqli_query($conn, $insertQuery)) {
		echo "<script>
                alert('Registered successfully');
                window.location.href = 'login.php';
            </script>";
		exit();
	} else {
		echo "<script>
                alert('Error: " . mysqli_error($conn) . "');
                window.location.href = 'login.php';
            </script>";
		exit();
	}
}

// Sign In Logic
if (isset($_POST['loginbtn'])) {
	$username = $_POST['username'];
	$password = $_POST['password'];

	$sql = "SELECT * FROM logindetails WHERE username='$username'";
	$result = mysqli_query($conn, $sql);

	if (mysqli_num_rows($result) > 0) {
		$row = mysqli_fetch_assoc($result);
		$storedPassword = $row['password'];

		if (password_verify($password, $storedPassword)) {
			session_start();
			$_SESSION['username'] = $username;
			header('Location: 1stpage.html');
			exit();
		} else {
			echo "<script>
                    alert('Incorrect password');
                    window.location.href = 'login.php';
                </script>";
			exit();
		}
	} else {
		echo "<script>
                alert('Username not found');
                window.location.href = 'login.php';
            </script>";
		exit();
	}
}
?>