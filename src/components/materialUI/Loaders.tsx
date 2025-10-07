// components/ui/LoaderOverlay.tsx
import { Loader } from "lucide-react";

interface LoaderOverlayProps {
  style? : string 
}

export const LoaderOverlay : React.FC<LoaderOverlayProps> = ({style}) => {
  return (
    <div className={`absolute w-full h-full top-0 left-0 backdrop-blur-2xl flex items-center justify-center flex-col rounded-md z-50 ${style}`}>
      <Loader className="animate-spin text-primary" size={36} />
    </div>
  );
};
