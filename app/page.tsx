"use client";
import { Meter } from "@/components/ui/meter";
import { Card } from "@/components/ui/card";
import { ClipboardIcon, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { TabsContent, Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";

function Home() {
  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Copied to clipboard!", { position: "top-center" });
  };
  const { setTheme, theme } = useTheme(); // Add this hook

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold">shadcn-ui-meter</h1>
            <h2 className="text-xl">A React component for displaying meters</h2>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                window.open(
                  "https://github.com/DavidAmunga/shadcn-ui-meter",
                  "_blank"
                )
              }
            >
              <GithubIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="setup" className="space-y-4">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="setup">Setup</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
          </TabsList>

          <TabsContent value="setup" className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-4">Setup</h2>
              <p className="mb-4">
                Copy the component code and paste it into your project (e.g.,{" "}
                <code className="px-1 py-0.5 rounded bg-muted">
                  components/ui/meter.tsx
                </code>
                ):
              </p>
              <div className="relative">
                <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                  <code className="text-sm">{`import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const meterVariants = cva(
  "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
  {
    variants: {
      variant: {
        default: "bg-secondary",
        success: "bg-success/20",
        warning: "bg-warning/20",
        danger: "bg-danger/20",
      },
      size: {
        sm: "h-2",
        default: "h-4",
        lg: "h-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const meterIndicatorVariants = cva("h-full w-full flex-1 transition-all", {
  variants: {
    variant: {
      default: "bg-primary",
      success: "bg-success",
      warning: "bg-warning",
      danger: "bg-danger",
    },
    size: {
      sm: "h-2",
      default: "h-4",
      lg: "h-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

interface MeterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof meterVariants> {
  value: number
  max?: number
  label?: string
  valueLabel?: string
  color?: string
}

const Meter = React.forwardRef<HTMLDivElement, MeterProps>(
  (
    {
      className,
      value,
      max = 100,
      label,
      valueLabel,
      variant,
      size,
      color,
      ...props
    },
    ref
  ) => {
    const percentage = (value / max) * 100
    return (
      <div className="space-y-2">
        {(label || valueLabel) && (
          <div className="flex items-center justify-between text-sm">
            {label && <div>{label}</div>}
            {valueLabel && <div>{valueLabel}</div>}
          </div>
        )}
        <div
          ref={ref}
          className={cn(meterVariants({ variant, size, className }))}
          {...props}
        >
          <div
            className={cn(meterIndicatorVariants({ variant, size }))}
            style={{
              width: \`\${percentage}%\`,
              backgroundColor: color,
            }}
          />
        </div>
      </div>
    )
  }
)
Meter.displayName = "Meter"

export { Meter }`}</code>
                </pre>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() =>
                    copyToClipboard(`import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const meterVariants = cva(
  "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
  {
    variants: {
      variant: {
        default: "bg-secondary",
        success: "bg-success/20",
        warning: "bg-warning/20",
        danger: "bg-danger/20",
      },
      size: {
        sm: "h-2",
        default: "h-4",
        lg: "h-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const meterIndicatorVariants = cva("h-full w-full flex-1 transition-all", {
  variants: {
    variant: {
      default: "bg-primary",
      success: "bg-success",
      warning: "bg-warning",
      danger: "bg-danger",
    },
    size: {
      sm: "h-2",
      default: "h-4",
      lg: "h-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

interface MeterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof meterVariants> {
  value: number
  max?: number
  label?: string
  valueLabel?: string
  color?: string
}

const Meter = React.forwardRef<HTMLDivElement, MeterProps>(
  (
    {
      className,
      value,
      max = 100,
      label,
      valueLabel,
      variant,
      size,
      color,
      ...props
    },
    ref
  ) => {
    const percentage = (value / max) * 100
    return (
      <div className="space-y-2">
        {(label || valueLabel) && (
          <div className="flex items-center justify-between text-sm">
            {label && <div>{label}</div>}
            {valueLabel && <div>{valueLabel}</div>}
          </div>
        )}
        <div
          ref={ref}
          className={cn(meterVariants({ variant, size, className }))}
          {...props}
        >
          <div
            className={cn(meterIndicatorVariants({ variant, size }))}
            style={{
              width: \`\${percentage}%\`,
              backgroundColor: color,
            }}
          />
        </div>
      </div>
    )
  }
)
Meter.displayName = "Meter"

export { Meter }`)
                  }
                >
                  <ClipboardIcon className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Note: This component requires{" "}
                <code className="px-1 py-0.5 rounded bg-muted">
                  class-variance-authority
                </code>{" "}
                and the <code className="px-1 py-0.5 rounded bg-muted">cn</code>{" "}
                utility from shadcn/ui. Make sure you have these dependencies
                installed.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="usage" className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Usage</h2>
            <p className="mb-4">
              Import and use the Meter component in your React components:
            </p>

            <div className="grid gap-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Storage Usage</h2>
                <Meter
                  value={75}
                  max={100}
                  label="Storage"
                  valueLabel="75GB of 100GB used"
                  variant="warning"
                  className="w-full"
                />
                <div className="relative">
                  <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                    <code className="text-sm">
                      {`<Meter
  value={75}
  max={100}
  label="Storage"
  valueLabel="75GB of 100GB used"
  variant="warning"
  className="w-full"
/>`}
                    </code>
                  </pre>
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() =>
                      copyToClipboard(
                        `<Meter
      value={75}
      max={100}
      label="Storage"
      valueLabel="75GB of 100GB used"
      variant="warning"
      className="w-full"
    />`
                      )
                    }
                  >
                    <ClipboardIcon className="h-4 w-4" />
                  </Button>
                </div>
              </Card>

              <div className="grid gap-6 sm:grid-cols-2">
                <Card className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Battery Status</h2>
                  <Meter
                    value={90}
                    label="Battery"
                    valueLabel="90% - 4hr remaining"
                    size="lg"
                    color="#22c55e"
                  />
                  <div className="relative">
                    <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                      <code className="text-sm">
                        {`<Meter 
value={90}
label="Battery"
valueLabel="90% - 4hr remaining"
size="lg"
color="#22c55e"
/>`}
                      </code>
                    </pre>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() =>
                        copyToClipboard(
                          `<Meter
                value={90}
                label="Battery"
                valueLabel="90% - 4hr remaining"
                size="lg"
                color="#22c55e"
              />`
                        )
                      }
                    >
                      <ClipboardIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="text-lg font-semibold mb-4">CPU Usage</h2>
                  <Meter
                    value={85}
                    label="CPU Load"
                    valueLabel="85% (High)"
                    size="lg"
                    color="#eab308"
                  />
                  <div className="relative">
                    <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                      <code className="text-sm">
                        {`<Meter 
value={85}
label="CPU Load"
valueLabel="85% (High)"
size="lg"
color="#eab308"
/>`}
                      </code>
                    </pre>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() =>
                        copyToClipboard(
                          `<Meter 
value={85}
label="CPU Load"
valueLabel="85% (High)"
size="lg"
color="#eab308"
/>`
                        )
                      }
                    >
                      <ClipboardIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </div>

              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4">Memory Usage</h2>
                <div className="space-y-4">
                  <Meter
                    value={30}
                    label="Application Memory"
                    valueLabel="3.5GB of 16GB"
                    size="sm"
                    color="#6366f1"
                  />
                  <Meter
                    value={95}
                    label="System Memory"
                    valueLabel="Critical: 15.2GB of 16GB"
                    size="sm"
                    color="#ef4444"
                  />
                </div>

                <div className="relative">
                  <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                    <code className="text-sm">
                      {`<Meter
value={30}
label="Application Memory"
valueLabel="3.5GB of 16GB"
size="sm"
color="#6366f1"
/>

<Meter
value={95}
label="System Memory"
valueLabel="Critical: 15.2GB of 16GB"
size="sm"
color="#ef4444"
/>`}
                    </code>
                  </pre>
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() =>
                      copyToClipboard(
                        `<Meter
value={30}
label="Application Memory"
valueLabel="3.5GB of 16GB"
size="sm"
color="#6366f1"
/>

<Meter
value={95}
label="System Memory"
valueLabel="Critical: 15.2GB of 16GB"
size="sm"
color="#ef4444"
/>`
                      )
                    }
                  >
                    <ClipboardIcon className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Home;
