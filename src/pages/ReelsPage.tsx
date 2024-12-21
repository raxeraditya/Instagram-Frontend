import React from "react";
import { ReelGrid } from "../components/reels/ReelGrid";
import { ReelModal } from "../components/reels/ReelModal";

export function ReelsPage() {
  const [selectedReel, setSelectedReel] = React.useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 pb-16 lg:pb-4">
      <ReelGrid onReelSelect={setSelectedReel} />
      {selectedReel && (
        <ReelModal
          reelId={selectedReel}
          onClose={() => setSelectedReel(null)}
        />
      )}
    </div>
  );
}
