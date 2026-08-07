# 🏥 SmartQueue AI

> An AI-powered Hospital Queue Management System built using **React** and **AWS Serverless Services**. SmartQueue AI helps manage hospital queues through a modern web interface while providing analytics and AI-generated insights.

---

## 🌐 Live Demo

**Website:**  
https://d1amw8m7yqehsy.cloudfront.net

---

## 🚀 Features

- 🏥 Hospital Queue Management
- ➕ Add, Edit & Delete Hospital Queue Records
- 📊 Analytics Dashboard with Charts
- 🤖 AI Insights powered by Amazon Bedrock
- 📱 Responsive User Interface
- ⚡ REST API using AWS Lambda & API Gateway
- ☁️ Cloud Deployment on AWS
- 🔄 Automated CI/CD using GitHub Actions

---

# 📸 Screenshots

## Home Page

> *(Add screenshot here)*

## Analytics Dashboard

> *(Add screenshot here)*

## AI Insights

> *(Add screenshot here)*

## Mobile View

> *(Add screenshot here)*

---

# 🏗️ Architecture

```text
                User
                  │
                  ▼
        Amazon CloudFront (HTTPS)
                  │
                  ▼
          Amazon S3 (React App)
                  │
                  ▼
           Amazon API Gateway
                  │
                  ▼
             AWS Lambda
            ┌─────────────┐
            │             │
            ▼             ▼
      DynamoDB      Amazon Bedrock
```

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- Recharts

## Backend

- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB

## Cloud & DevOps

- Amazon S3
- Amazon CloudFront
- Amazon CloudWatch
- AWS CloudTrail
- IAM
- GitHub Actions

---

# ☁️ AWS Services Used

| Service | Purpose |
|----------|---------|
| Amazon S3 | Static website hosting |
| Amazon CloudFront | CDN & HTTPS |
| AWS Lambda | Serverless backend |
| Amazon API Gateway | REST API |
| Amazon DynamoDB | Queue data storage |
| Amazon Bedrock | AI-powered insights |
| Amazon CloudWatch | Monitoring & metrics |
| AWS CloudTrail | API activity logging |
| IAM | Secure access management |

---

# 🤖 AI Capabilities

SmartQueue AI integrates **Amazon Bedrock** to generate intelligent insights such as:

- Queue trend analysis
- Hospital recommendations
- Wait-time observations
- Capacity insights

---

# 🔄 CI/CD Pipeline

The project uses **GitHub Actions** for continuous deployment.

```text
Developer
     │
     ▼
 Git Push
     │
     ▼
 GitHub Actions
     │
     ▼
 Build React App
     │
     ▼
 Upload to Amazon S3
     │
     ▼
 CloudFront Cache Invalidation
     │
     ▼
 Live Website Updated
```

---

# 📂 Project Structure

```text
smartqueue-ai
│
├── .github/
│   └── workflows/
│
├── backend/
│
├── infrastructure/
│
├── public/
│
├── src/
│   ├── components/
│   ├── services/
│   └── assets/
│
├── package.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/JuggaadSingh/smartqueue-ai.git
```

Move into the project

```bash
cd smartqueue-ai
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

Build

```bash
npm run build
```

---

# 🌍 Deployment

Frontend

- Amazon S3
- Amazon CloudFront

Backend

- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB

CI/CD

- GitHub Actions

---

# 💡 Challenges Solved

During development, the project involved resolving several real-world deployment and cloud issues, including:

- Configuring API Gateway CORS
- Deploying a React application to Amazon S3
- CloudFront cache invalidation
- GitHub Actions CI/CD troubleshooting
- Git merge and rebase conflict resolution
- Secure AWS credential management using GitHub Secrets

---

# 🔮 Future Improvements

- User Authentication
- Role-based Access Control
- Real-time Queue Updates
- Email/SMS Notifications
- Appointment Scheduling
- Multi-Hospital Management
- Enhanced AI Recommendations

---

# 👨‍💻 Author

**Juggaad Singh Sandha**

GitHub:  
https://github.com/JuggaadSingh

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
