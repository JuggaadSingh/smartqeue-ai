function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10 mt-20">

      <div className="max-w-7xl mx-auto px-8 text-center">

        <h2 className="text-3xl font-bold mb-3">
          🏥 SmartQueue AI
        </h2>

        <p className="text-gray-400 mb-6">
          AI Powered Hospital Queue Management System
        </p>

        <div className="flex justify-center gap-8 mb-6">

          <span>⚡ AWS Lambda</span>

          <span>🌐 API Gateway</span>

          <span>🗄️ DynamoDB</span>

          <span>⚛️ React</span>

        </div>

        <hr className="border-gray-700 mb-6" />

        <p className="text-gray-500">
          © 2026 SmartQueue AI • Built with AWS Serverless & React
        </p>

      </div>

    </footer>
  );
}

export default Footer;