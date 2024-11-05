import { Meter } from "@/components/ui/meter";
import { Card } from "@/components/ui/card";

function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">shadcn-ui-meter</h1>
          <h2 className="text-xl">A React component for displaying meters</h2>
        </div>
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
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
