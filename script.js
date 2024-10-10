/* General Styling */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background: #005f73;
    color: #fff;
    padding: 15px 0;
    text-align: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
}

.logo img {
    width: 150px;
    display: inline-block;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    padding: 8px 12px;
    border-radius: 4px;
    transition: background 0.3s ease;
}

nav ul li a:hover {
    background: #94d2bd;
    color: #005f73;
}

/* Hero Section */
.hero {
    background: #0a9396;
    color: #fff;
    text-align: center;
    padding: 100px 20px;
    margin-top: 80px;
}

.cta-button {
    background: #94d2bd;
    color: #005f73;
    padding: 12px 24px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 18px;
    margin-top: 20px;
    display: inline-block;
    transition: background 0.3s ease;
}

.cta-button:hover {
    background: #ee9b00;
}

/* Content Sections */
.content-section {
    padding: 40px 20px;
    background: #fff;
    margin: 20px auto;
    border-radius: 8px;
    width: 80%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
}

/* Pricing Section */
.pricing-tiers {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.tier {
    background: #e9ecef;
    padding: 20px;
    border-radius: 8px;
    width: 45%;
}

/* Footer */
footer {
    background: #005f73;
    color: #fff;
    text-align: center;
    padding: 15px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
}
