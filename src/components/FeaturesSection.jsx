function FeaturesSection() {
  const features = [
    {
      icon: "⚡",
      title: "AWS Lambda",
      desc: "Serverless backend that executes API requests without managing servers.",
    },
    {
      icon: "🌐",
      title: "API Gateway",
      desc: "Secure REST APIs connecting the React frontend to AWS Lambda.",
    },
    {
      icon: "🗄️",
      title: "Amazon DynamoDB",
      desc: "Fast NoSQL database storing hospital queue information.",
    },
    {
      icon: "⚛️",
      title: "React + Vite",
      desc: "Modern frontend with reusable components and responsive UI.",
    },
    {
      icon: "🤖",
      title: "AI Ready",
      desc: "Designed to integrate AI for queue prediction and recommendations.",
    },
    {
      icon: "☁️",
      title: "Serverless Cloud",
      desc: "Built entirely using AWS serverless architecture for scalability.",
    },
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-blue-700 mb-4">
          Project Technologies
        </h2>

        <p className="text-center text-gray-500 mb-14 text-lg">
          SmartQueue AI is built using a modern AWS Serverless Architecture.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <div className="text-5xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-blue-700 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturesSection;