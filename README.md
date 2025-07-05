# 🎬 FilmFuse

**Your Ultimate Movie Ticket Booking Platform**

Welcome to **FilmFuse** – an interactive movie ticket booking system where users can explore movies, choose show timings, book their seats, and even get a **POV (Point of View)** of the screen from their selected seat.

---

## 🌟 Key Features

🛂 **User Authentication**
🔐 Login & Signup with secure password hashing.

🎞️ **Browse Movies**
Upcoming and now-showing films with high-quality posters.

🕑 **Select Show Timings**
Intuitive carousel-based showtime selection with screen-wise options.

💺 **Interactive Seat Booking with POV View**
Select your seat and instantly see a **POV preview** of how the screen will look from your seat! *(Enhances the realism and booking confidence)*

🎫 **Instant Ticket Summary**
Get a ticket preview with pricing and seat numbers after selection.

📱 **Fully Responsive Design**
Works seamlessly across devices using Bootstrap 4 & 5.

🧑‍💻 **Admin Panel (Planned)**
Scalable architecture for admin-side management.

---

## 🖼️ Screenshots

| 🎥 Homepage                                                    | 🗓️ Show Timings                                                 | 💺 Seat Selection + POV                                              |
| -------------------------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------- |
| ![Homepage](https://via.placeholder.com/250x150?text=Homepage) | ![ShowTimings](https://via.placeholder.com/250x150?text=Timings) | ![Seats POV](https://via.placeholder.com/250x150?text=POV+Seat+View) |

> 📌 *Replace the above placeholder links with actual screenshots later.*

---

## 🧩 Project Structure

```
FilmFuse/
├── css/                # Stylesheets (1st page, About Us, seats)
├── js/                 # Scripts (theme, login, seats interaction)
├── IMG/                # Static images (logos, team members)
├── Images/             # POV & screen view images
├── Mimages/            # Movie posters
├── *.html              # Frontend pages
├── login.php           # User login/signup logic
├── signup.php
├── seats.html          # Seat selection + POV feature
├── payment.html        # Placeholder for payment logic
├── appspec.yml         # For AWS CodeDeploy setup
```

---

## ⚙️ Technologies Used

| Category       | Tech Stack                              |
| -------------- | --------------------------------------- |
| **Frontend**   | HTML5, CSS3, JavaScript, Bootstrap 4/5  |
| **Backend**    | PHP                                     |
| **Database**   | MySQL (for user login and registration) |
| **Deployment** | AWS CodeDeploy (`appspec.yml`)          |

---

## 🚀 How to Run Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-repo/filmfuse.git
   cd filmfuse
   ```

2. **Setup the Database**

   * Start MySQL (XAMPP/WAMP)
   * Create a database:

     ```sql
     CREATE DATABASE `website login`;
     ```
   * Create user table:

     ```sql
     CREATE TABLE logindetails (
       id INT AUTO_INCREMENT PRIMARY KEY,
       username VARCHAR(255) NOT NULL UNIQUE,
       email VARCHAR(255) NOT NULL,
       password VARCHAR(255) NOT NULL
     );
     ```

3. **Run via Local Server**

   * Copy the project to `htdocs/` (XAMPP) or `www/` (WAMP)
   * Navigate to: `http://localhost/filmfuse/login.php`

---

## 🎯 Upcoming Improvements

* ✅ Integrate Razorpay/Stripe for payment gateway
* ✅ Add ticket download as PDF
* ✅ Dynamic movie & show data from database
* ✅ Admin panel integration
* ✅ Show real-time seat availability

---

## 👥 Meet the Team

| Name            | ID         |
| --------------- | ---------- |
| Firoz Khan      | 1BG22CS046 |
| Akshaya Kuncham | 1BG22CS011 |
| AG Madhukirana  | 1BG22CS001 |

---

## 📜 License

This project is created for educational purposes and university submissions.
Feel free to explore, learn, and adapt with appropriate credits.

---

## 🙌 Acknowledgements

* Bootstrap
* Font Awesome
* Flickity Carousel
* Google Fonts

---

### 🔗 Live Demo *(Optional)*

> Upload to GitHub Pages or Netlify for live viewing if needed.

---

