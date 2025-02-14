export default function TokenomicsCard({ title, description, percentage }: {title: string, description: string, percentage: string}) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold text-green-500 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="text-4xl font-bold text-green-500">
          {percentage}
        </div>
      </div>
    );
  }