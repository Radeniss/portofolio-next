"use client";

interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusClasses = {
    Completed: "bg-green-500",
    "In Progress": "bg-blue-500",
    High: "bg-red-500",
    Low: "bg-yellow-500",
    default: "bg-gray-500",
  };

  const badgeClass =
    statusClasses[status as keyof typeof statusClasses] || statusClasses.default;

  return (
    <div className="flex items-center">
      <span
        className={`inline-block h-2 w-2 rounded-full ${badgeClass} mr-2`}
      ></span>
      <span>{status}</span>
    </div>
  );
}
