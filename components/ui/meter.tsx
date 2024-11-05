import * as React from "react";
import { cn } from "@/lib/utils";

export interface MeterProps
  extends React.ProgressHTMLAttributes<HTMLProgressElement> {
  size?: "sm" | "default" | "lg";
  variant?: "default" | "success" | "warning" | "danger";
  showValue?: boolean;
  label?: string;
  valueLabel: string;
  color?: string;
  value?: number;
  max?: number;
}

const Meter = React.forwardRef<HTMLProgressElement, MeterProps>(
  (
    {
      className,
      size = "default",
      variant = "default",
      label,
      valueLabel,
      color,
      value = 0,
      max = 100,
      ...props
    },
    ref
  ) => {
    const percentage = value && max ? (value / max) * 100 : 0;

    return (
      <div className="w-full">
        {label && (
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-foreground/90">{label}</span>
            <span className="text-foreground/60">{valueLabel}</span>
          </div>
        )}
        <div className="relative overflow-hidden rounded-md">
          <progress
            ref={ref}
            style={
              color
                ? ({
                    "--meter-color": color,
                  } as React.CSSProperties)
                : undefined
            }
            className={cn(
              "h-2 w-full rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-secondary [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:duration-500 [&::-moz-progress-bar]:transition-all [&::-moz-progress-bar]:duration-500",
              {
                "h-1.5": size === "sm",
                "h-2": size === "default",
                "h-3": size === "lg",
              },
              color
                ? "[&::-webkit-progress-value]:bg-[var(--meter-color)] [&::-moz-progress-bar]:bg-[var(--meter-color)]"
                : {
                    "[&::-webkit-progress-value]:bg-primary [&::-moz-progress-bar]:bg-primary":
                      variant === "default",
                    "[&::-webkit-progress-value]:bg-green-500 [&::-moz-progress-bar]:bg-green-500":
                      variant === "success",
                    "[&::-webkit-progress-value]:bg-yellow-500 [&::-moz-progress-bar]:bg-yellow-500":
                      variant === "warning",
                    "[&::-webkit-progress-value]:bg-red-500 [&::-moz-progress-bar]:bg-red-500":
                      variant === "danger",
                  },
              className
            )}
            value={value}
            max={max}
            {...props}
          />
          <div
            className={cn(
              "absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-500",
              {
                "opacity-100": percentage > 0,
              }
            )}
          />
        </div>
      </div>
    );
  }
);

Meter.displayName = "Meter";

export { Meter };
