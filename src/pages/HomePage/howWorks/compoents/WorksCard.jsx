function WorkCard({ step, title, description, icon, isLast = false }) {
  const IconComponent = icon;

  return (
    <div className=" py-5 bg-gray-100 flex flex-col items-center text-center relative md:h-78 p-6 rounded-lg shadow-md">
      {/* Icon Circle */}
      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
        {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
      </div>
      {/* Step Number */}
      <div className="text-pink-500 font-bold text-lg mb-2">
        {step.toString().padStart(2, "0")}
      </div>
      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 max-w-xs">{title}</h3>
      {/* Description */}
      <p className="text-gray-600 md:text-xs leading-tight max-w-xs">
        {description}
      </p>
      {/* Connector Line - only show if not last item */}
      {!isLast && (
        <div className="hidden -ml-2 lg:block absolute top-35 left-full w-20 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 transform translate-x-2">
          <div className="absolute right-0 top-0 w-0 h-0 border-l-4 border-l-pink-300 border-t-2 border-b-2 border-t-transparent border-b-transparent transform -translate-y-1"></div>
        </div>
      )}
    </div>
  );
}

export default WorkCard;
