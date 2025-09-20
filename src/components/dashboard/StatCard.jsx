import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const StatCard = ({ title, value, change, isPositive, cardType = "default" }) => {
    // Define different background colors for each stat card type based on the image
    const getCardStyles = (cardType) => {
        switch (cardType) {
            case "customers":
                return "bg-blue-100 border-blue-200"; // Light blue
            case "orders":
                return "bg-gray-100 border-gray-200"; // Light gray/white
            case "revenue":
                return "bg-gray-50 border-gray-100"; // Very light gray
            case "growth":
                return "bg-blue-200 border-blue-300"; // Medium blue
            default:
                return "bg-white border-gray-200"; // Default white
        }
    };

    const getTextColor = (cardType) => {
        switch (cardType) {
            case "customers":
                return "text-gray-700";
            case "orders":
                return "text-gray-700";
            case "revenue":
                return "text-gray-700";
            case "growth":
                return "text-gray-700";
            default:
                return "text-gray-900";
        }
    };

    const getValueColor = (cardType) => {
        switch (cardType) {
            case "customers":
                return "text-gray-900";
            case "orders":
                return "text-gray-900";
            case "revenue":
                return "text-gray-900";
            case "growth":
                return "text-gray-900";
            default:
                return "text-gray-900";
        }
    };

    const cardStyles = getCardStyles(cardType);
    const textColor = getTextColor(cardType);
    const valueColor = getValueColor(cardType);

    return (
        <div className={`${cardStyles} rounded-xl p-6 border shadow-sm`}>
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className={`text-sm font-medium ${textColor} mb-2`}>
                        {title}
                    </p>
                    <p className={`text-3xl font-bold ${valueColor} mb-3`}>
                        {value}
                    </p>
                    <div className="flex items-center">
                        <span
                            className={`text-sm font-medium mr-1 ${
                                isPositive ? "text-green-600" : "text-red-600"
                            }`}
                        >
                            {change}
                        </span>
                        {isPositive ? (
                            <TrendingUp className="h-4 w-4 text-green-500" />
                        ) : (
                            <TrendingDown className="h-4 w-4 text-red-500" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatCard;
