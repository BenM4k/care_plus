import clsx from "clsx";
import Image from "next/image";
import React from "react";

type StatCardProps = {
  type: "appointments" | "pending" | "cancelled";
  count: number;
  label: string;
  icon: string;
};
export default async function StatCard({
  count = 0,
  label,
  icon,
  type,
}: StatCardProps) {
  return (
    <div
      className={clsx("stat-card", {
        "bg-appointments": type === "appointments",
        "bg-pending": type === "pending",
        "bg-cancelled": type === "cancelled",
      })}
    >
      <div className="flex items-center gap-4">
        <Image
          src={icon}
          width={32}
          height={32}
          alt={label}
          className="size-8 w-fit"
        />
        <p className="text-32-bold text-white">{count}</p>
      </div>
      <p className="text-14-regular">{label}</p>
    </div>
  );
}
