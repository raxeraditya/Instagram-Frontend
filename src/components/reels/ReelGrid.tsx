import { Play } from "lucide-react";
import { SAMPLE_REELS } from "../../data/reels";

interface ReelGridProps {
  onReelSelect: (reelId: number) => void;
}

export function ReelGrid({ onReelSelect }: ReelGridProps) {
  return (
    <div className="grid grid-cols-3 gap-1 md:gap-4">
      {SAMPLE_REELS.map((reel) => (
        <div
          key={reel.id}
          className="relative aspect-[9/16] cursor-pointer group"
          onClick={() => onReelSelect(reel.id)}
        >
          <img
            src={reel.thumbnail}
            alt={`Reel by ${reel.username}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <Play className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
            <span className="flex items-center">
              <Play className="w-4 h-4 mr-1" />
              {reel.views.toLocaleString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
