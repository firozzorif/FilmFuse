<?php
$conn = mysqli_connect("localhost", "root", "", "website login"); // Adjust database credentials as needed

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
?>