CREATE TABLE Users(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    phone VARCHAR(20) ,
    role ENUM('customer','hotel_admin','hotel_staff','platform_admin') NOT NULL DEFAULT 'customer' ,
    status ENUM('active','inactive','banned') NOT NULL DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE Hotels(
    hotel_id INT AUTO_INCREMENT PRIMARY KEY,
    owner_id INT NOT NULL,
    name VARCHAR(150) NOT NULL,
    description text,
    address VARCHAR(350),
    city VARCHAR(120),
    verification_status ENUM('pending','verified','rejected') NOT NULL DEFAULT 'pending',
    rating decimal(2,1) DEFAULT 0.0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    FOREIGN KEY(owner_id) REFERENCES Users(user_id)

);

CREATE TABLE RoomTypes(
    room_type_id INT AUTO_INCREMENT PRIMARY KEY,
    hotel_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    description text,
    capacity INT NOT NULL,
    base_price decimal(10,2) NOT NULL,
    FOREIGN KEY(hotel_id) REFERENCES Hotels(hotel_id)
);

CREATE TABLE Rooms(
    room_id INT AUTO_INCREMENT PRIMARY KEY,
    hotel_id INT NOT NULL,
    room_type_id INT NOT NULL,
    room_number VARCHAR(30) NOT NULL,
    status ENUM('available','reserved','occupied','cleaning','maintenance','unavailable') NOT NULL DEFAULT 'available',
    FOREIGN KEY(room_type_id) REFERENCES RoomTypes(room_type_id),
    FOREIGN KEY(hotel_id) REFERENCES Hotels(hotel_id)
);