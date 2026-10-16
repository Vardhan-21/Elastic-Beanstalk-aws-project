const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    console.log('Received a request!');

    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Pythonlife</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            min-height: 100vh;
            background: linear-gradient(135deg, #020617, #0f172a, #1d4ed8);
            color: white;
        }

        nav {
            padding: 20px 8%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(0, 0, 0, 0.3);
        }

        .logo {
            font-size: 26px;
            font-weight: bold;
            color: #38bdf8;
        }

        .nav-text {
            color: #cbd5e1;
        }

        .hero {
            min-height: 55vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 40px 20px;
        }

        .hero-content {
            max-width: 900px;
        }

        .badge {
            display: inline-block;
            padding: 10px 20px;
            border-radius: 30px;
            background: rgba(34, 197, 94, 0.15);
            border: 1px solid #22c55e;
            color: #4ade80;
            margin-bottom: 25px;
        }

        h1 {
            font-size: 60px;
            margin-bottom: 20px;
        }

        h1 span {
            color: #38bdf8;
        }

        .subtitle {
            font-size: 25px;
            color: #e0f2fe;
            margin-bottom: 20px;
        }

        .description {
            font-size: 18px;
            line-height: 1.7;
            color: #cbd5e1;
        }

        .cards {
            max-width: 1100px;
            margin: auto;
            padding: 30px 20px 60px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
        }

        .card {
            padding: 30px 20px;
            text-align: center;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            transition: 0.3s;
        }

        .card:hover {
            transform: translateY(-8px);
            background: rgba(255, 255, 255, 0.14);
        }

        .icon {
            font-size: 45px;
            margin-bottom: 15px;
        }

        .card h3 {
            color: #38bdf8;
            margin-bottom: 10px;
        }

        .card p {
            color: #cbd5e1;
            line-height: 1.5;
        }

        .status {
            text-align: center;
            margin: 20px auto 50px;
            padding: 18px;
            max-width: 600px;
            border-radius: 15px;
            background: rgba(34, 197, 94, 0.12);
            border: 1px solid #22c55e;
        }

        .online {
            color: #4ade80;
            font-weight: bold;
        }

        footer {
            text-align: center;
            padding: 25px;
            background: rgba(0, 0, 0, 0.4);
            color: #94a3b8;
        }

        footer strong {
            color: #38bdf8;
        }

        @media(max-width: 600px) {
            h1 {
                font-size: 40px;
            }

            .subtitle {
                font-size: 20px;
            }

            .nav-text {
                display: none;
            }
        }
    </style>
</head>

<body>

<nav>
    <div class="logo">☁️ Pythonlife-Devops-Krishna</div>
    <div class="nav-text">
        AWS • Node.js • CI/CD • DevOps
    </div>
</nav>

<section class="hero">

    <div class="hero-content">

        <div class="badge">
            🟢 APPLICATION RUNNING
        </div>

        <h1>
            Hello from <span>Node.js</span>
        </h1>

        <div class="subtitle">
            Elastic Beanstalk CI/CD Web Application
        </div>

        <p class="description">
            Welcome to Pythonlife-DevOps.
            This application demonstrates a Node.js application
            deployed on AWS Elastic Beanstalk using modern
            CI/CD and DevOps practices.
        </p>

    </div>

</section>

<section class="cards">

    <div class="card">
        <div class="icon">🟢</div>
        <h3>Node.js</h3>
        <p>
            Modern JavaScript runtime for scalable
            server-side applications.
        </p>
    </div>

    <div class="card">
        <div class="icon">☁️</div>
        <h3>AWS</h3>
        <p>
            Application deployed using AWS
            Elastic Beanstalk cloud infrastructure.
        </p>
    </div>

    <div class="card">
        <div class="icon">🔄</div>
        <h3>CI/CD</h3>
        <p>
            Automated build and deployment workflow
            for faster application delivery.
        </p>
    </div>

    <div class="card">
        <div class="icon">⚙️</div>
        <h3>DevOps</h3>
        <p>
            Infrastructure, automation and continuous
            delivery using DevOps practices.
        </p>
    </div>

</section>

<div class="status">
    Application Status:
    <span class="online">ONLINE</span>
</div>

<footer>
    © 2026 <strong>Pythonlife-DevOps-Krishna</strong>
    | Node WebApp CI/CD
    | AWS Elastic Beanstalk
</footer>

</body>
</html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
